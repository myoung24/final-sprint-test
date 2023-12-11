const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sprint_app",
  password: "YOUR_PASSWORD",
  port: 5432,
});
module.exports = pool;
