const express = require('express');
const path = require('path');
const router = express.Router();

const error = require('./error');

router.use(error.client);
router.use(error.server);

module.exports = router;