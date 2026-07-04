const { Pool } = require("pg");
require("dotenv").config();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
//   ssl: {
//         rejectUnauthorized: false,
//     },
// });

const pool = new Pool({
  connectionString: "postgresql://neondb_owner:npg_APg9Ml8kKJuY@ep-noisy-firefly-at1g8u1i-pooler.c-9.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require",
  ssl: {
        rejectUnauthorized: false,
    },
});

pool.connect()
  .then(() => {
    console.log("PostgreSQL Connected Successfully");
  })
  .catch((err) => {
    console.log("DB ERROR:", err.message);
  });

module.exports = pool;