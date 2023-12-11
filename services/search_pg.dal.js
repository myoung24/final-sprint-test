const dal = require("./pg_db_auth");

var getProcedures = function () {
  if (DEBUG) console.log("procedures.pg.dal.getProcedures()");
  return new Promise(function (resolve, reject) {
    const sql = "SELECT * FROM procedures LIMIT 30";
    dal.query(sql, [], (err, result) => {
      if (err) {
        if (DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

var getProcedure = function (id) {
  if (DEBUG) console.log("procedures.pg.dal.getProcedure()");
  return new Promise(function (resolve, reject) {
    const sql = "SELECT * FROM procedures WHERE id = $1";
    dal.query(sql, [id], (err, result) => {
      if (err) {
        if (DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

module.exports = { getProcedures, getProcedure };
