const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

/* ===========================
   MIDDLEWARE
=========================== */
app.use(cors());
app.use(express.json());

/* ===========================
   HOME
=========================== */
app.get("/", (req, res) => {
  res.send("Backend Running...");
});

/* ===========================
   INTERN REGISTRATION
=========================== */
app.post("/api/interns/register", async (req, res) => {
  try {
    const {
      full_name,
      email,
      contact_number,
      college_name,
      degree,
      branch,
      year,
      status,
    } = req.body;

    const internStatus = status || "Pending";

    const result = await pool.query(
      `INSERT INTO interns
      (full_name, email, contact_number, college_name, degree, branch, year, status)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
      RETURNING *`,
      [
        full_name,
        email,
        contact_number,
        college_name,
        degree,
        branch,
        year,
        internStatus,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Intern Registered Successfully",
      data: result.rows[0],
    });

  } catch (err) {
    console.error("REGISTER ERROR:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ===========================
   GET ALL INTERNS (FIXED)
=========================== */
app.get("/api/interns", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM interns ORDER BY intern_id DESC"
    );

    res.status(200).json({
      success: true,
      count: result.rows.length,
      data: result.rows,
    });

  } catch (err) {
    console.error("INTERNS ERROR:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ===========================
   GET SINGLE INTERN (FOR DASHBOARD)
=========================== */
app.get("/api/intern/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const result = await pool.query(
      "SELECT * FROM interns WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Intern not found",
      });
    }

    res.json({
      success: true,
      data: result.rows[0],
    });

  } catch (err) {
    console.error("SINGLE INTERN ERROR:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ===========================
   ALLOCATE INTERN
=========================== */
app.put("/api/interns/:id/allocate", async (req, res) => {
  try {
    const { id } = req.params;
    const { domain } = req.body;

    const result = await pool.query(
      `UPDATE interns
       SET domain = $1,
           status = 'Active'
       WHERE intern_id = $2
       RETURNING *`,
      [domain, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Intern Not Found",
      });
    }

    res.json({
      success: true,
      message: "Intern Allocated Successfully",
      data: result.rows[0],
    });

  } catch (err) {
    console.error("ALLOCATION ERROR:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ===========================
   TASKS
=========================== */
app.get("/api/tasks", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM tasks ORDER BY task_id ASC"
    );

    res.json({ success: true, data: result.rows });

  } catch (err) {
    console.error("TASK ERROR:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});

app.put("/api/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await pool.query(
      `UPDATE tasks
       SET status = $1
       WHERE task_id = $2
       RETURNING *`,
      [status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Task Not Found",
      });
    }

    res.json({
      success: true,
      message: "Task Updated Successfully",
      data: result.rows[0],
    });

  } catch (err) {
    console.error("UPDATE TASK ERROR:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ===========================
   SERVER START
=========================== */
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});