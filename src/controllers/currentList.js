const path = require("path");
const dbConnection = require("../../db/db_connection.js");
const getList = require("./getList");
const currentList = require("./currentList");

const getShoppingList = (req, res, cb) => {
  console.log("getShoppingList func");
  const name = req.params.name;
  console.log("realllll", name);

  dbConnection.query(
    //   // return personId which contains people_id - to be passed in to bookings table
    `SELECT full_name, item, quantity, price FROM users INNER JOIN shoppingList ON shoppingList.user_id = users.id WHERE full_name = ($1)`,
    [name],

    (err, result) => {
      // console.log(personId); // logs out object for person, passed into bookings
      if (err) {
        console.log("query error", err);
        cb(err);
      } else {
        console.log("retrieved database");
        console.log(result.rows);
        const data = result.rows.slice();
        // cb(null, data);
        // const output = JSON.stringify(data);
        // res.end(output);
        // res.send(data[0].full_name);
        res.render("currentList.hbs", {
          list: data
        });
      }
    }
  );
  // res.redirect("/current-list");
};

// exports.get = (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "views", "currentList.hbs"));
// };

exports.get = (req, res) => {
  getShoppingList(req, res);
  // res.render("currentList.hbs");
  // res.redirect("/current-list");
  // res.sendFile(path.join(__dirname, "..", "views", "currentList.hbs"));
};
