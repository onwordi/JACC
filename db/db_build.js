const fs = require("fs");
const dbConnection = require("./db_connection");
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const buildDatabase = () => {
  dbConnection.query(sql, (err, result) => {
    if (err) {
      console.log(err, "error");
    } else {
      console.log("database created");
      dbConnection.end(() => {
        console.log("connection closed");
      });
    }
  });
};

buildDatabase();

module.exports = buildDatabase;
