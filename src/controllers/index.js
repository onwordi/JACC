const express = require("express");
const path = require("path");
const router = express.Router();

const shoppingList = require("./shoppingList.js");
const currentList = require("./currentList.js");
const getList = require("./getList.js");
const error = require("./error");

router.get("/shopping-list", shoppingList.get);
router.post("/shopping-list", getList.post);
router.get("/current-list/:name", currentList.get);
router.get("/current-list", currentList.get);

// router.get("/current-list", currentList.getShoppingList);
router.use(error.client);
router.use(error.server);

module.exports = router;
