var express = require('express');
var router = express.Router();

const index = require('../controllers/index');

router.get('/', index)

module.exports = router;