const express = require('express');
const path = require('path');
const router = express.Router();

const shoppingList = require('./shoppingList');
const currentList = require('./currentList');
const error = require('./error');

router.get('/shopping-list', shoppingList.get);
router.get('/current-list', currentList.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
