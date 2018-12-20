const express = require('express');
const path = require('path');
const router = express.Router();

const welcome = require('./welcome');
const error = require('./error');

router.get('/welcome', welcome.get);
router.use(error.client);
router.use(error.server);

module.exports = router;