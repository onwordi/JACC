const path = require("path");
const dbConnection = require("../../db/db_connection.js");
const getList = require("./getList");

const getShoppingList = (req, res) => {
  console.log("getShoppingList func");
  const name = req.params.name;
  console.log("real", name);

  dbConnection.query(
    //   // return personId which contains people_id - to be passed in to bookings table
    `SELECT full_name, item, quantity, price FROM users INNER JOIN shoppingList ON shoppingList.user_id = users.id WHERE full_name = ($1)`,
    [name],

    (err, success) => {
      // console.log(personId); // logs out object for person, passed into bookings
      if (err) {
        console.log("query error", err);
        return err;
      } else {
        // cb(null);
        console.log("retrieved database");
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
  res.render("currentList");
};

// currentstaging
