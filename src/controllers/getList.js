const dbConnection = require("../../db/db_connection.js");
const path = require("path");
exports.post = (req, res) => {
  const name = req.body.name;
  // console.log(req.body.name);
  const item = req.body.item;
  const quantity = req.body.quantity;
  const price = req.body.price;

  dbConnection.query(
    // return personId which contains people_id - to be passed in to bookings table
    "INSERT INTO users (full_name) VALUES ($1) RETURNING id",
    [name],
    (err, userRes) => {
      // console.log(personId); // logs out object for person, passed into bookings
      if (err) return err;
      dbConnection.query(
    // return personId which contains people_id - to be passed in to bookings table
    "INSERT INTO shoppinglist (user_id, item, quantity, price) VALUES ($1, $2, $3, $4)",
    [userRes.rows[0].id, item, quantity, price],
    err => {
      // console.log(personId); // logs out object for person, passed into bookings
      console.log("inserted into shoppinglist database");
      if (err) return err;
      console.log('error!!!', err)
    });
  });
};

exports.get = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "currentList.hbs"));
};

exports.get = (req, res) => {
  res.render("shoppingList");
};
