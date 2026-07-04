const db = require("../config/db");

exports.registerIntern = async (req, res) => {
  try {
    const {
      student_name,
      email,
      phone,
      college_name,
      domain
    } = req.body;

    const result = await db.query(
      `INSERT INTO public.internships
      (student_name,email,phone,college_name,domain)
      VALUES($1,$2,$3,$4,$5)
      RETURNING *`,
      [student_name,email,phone,college_name,domain]
    );

    res.json(result.rows[0]);

  } catch(err){
    console.log(err);
  }
};

exports.getAllInterns = async (req,res)=>{
  const result = await db.query(
    "SELECT * FROM public.internships"
  );

  res.json(result.rows);
};