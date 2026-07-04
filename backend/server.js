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
app.post("/interns/register", async (req, res) => {
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

    const result = await pool.query(
      `INSERT INTO public.interns
      (full_name,email,contact_number,college_name,degree,branch,year,status)
      VALUES($1,$2,$3,$4,$5,$6,$7,$8)
      RETURNING *`,
      [
        full_name,
        email,
        contact_number,
        college_name,
        degree,
        branch,
        year,
        status || "Pending",
      ]
    );

    res.status(201).json({
      success: true,
      message: "Intern Registered Successfully",
      data: result.rows[0],
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/* ===========================
   GET ALL INTERNS
=========================== */
app.get("/interns", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.interns ORDER BY intern_id DESC"
    );

    res.json({
      success: true,
      data: result.rows,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/* ===========================
   GET SINGLE INTERN + HISTORY
=========================== */
app.get("/intern/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const internResult = await pool.query(
      `SELECT *
       FROM public.interns
       WHERE email=$1`,
      [email]
    );

    if (internResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Intern not found",
      });
    }

    const intern = internResult.rows[0];

    const historyResult = await pool.query(
      `SELECT *
       FROM task_history
       WHERE intern_id=$1
       ORDER BY history_id DESC`,
      [intern.intern_id]
    );

    res.json({
      success: true,
      data: intern,
      history: historyResult.rows,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/* ===========================
   ALLOCATE INTERN
=========================== */
app.put("/interns/:id/allocate", async (req, res) => {
  try {
    const { id } = req.params;
    const { domain } = req.body;

    const result = await pool.query(
      `UPDATE public.interns
       SET domain=$1,
           status='Active'
       WHERE intern_id=$2
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
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/* ===========================
   UPDATE TASK
=========================== */
app.post("/update-task", async (req, res) => {
  try {
    const {
      intern_id,
      task,
      overview,
      completion,
      status,
    } = req.body;

    await pool.query(
      `UPDATE public.interns
       SET task=$1,
           completion=$2,
           status=$3,
           task_date=CURRENT_DATE,
           task_time=CURRENT_TIME
       WHERE intern_id=$4`,
      [
        task,
        completion,
        status,
        intern_id,
      ]
    );

    await pool.query(
      `INSERT INTO public.task_history
      (intern_id,task,overview,completion,status,task_date,task_time)
      VALUES($1,$2,$3,$4,$5,CURRENT_DATE,CURRENT_TIME)`,
      [
        intern_id,
        task,
        overview,
        completion,
        status,
      ]
    );

    res.json({
      success: true,
      message: "Task Updated Successfully",
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/* ===========================
   SERVER
=========================== */

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});