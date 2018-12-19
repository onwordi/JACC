const fs = require('fs');

const buildDatabase = () => {
  return new Promise((resolve, reject) => {
    const connection = require('./db_connection');
    const sql = fs.readFileSync(`${__dirname}/bd_build.sql`).toString();

    connection.query(sql, () => {
      try {
        resolve('Database has been created');
        connection.end(() => {
          console.log('connection closed');
        });
      } catch {
        reject('error')
      }
    });
  });
};

buildDatabase()
  .then(res => console.log(res))
  .catch(err => console.log(err))

module.export = buildDatabase;
