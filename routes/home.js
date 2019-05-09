const express = require('express');
const router = express.Router();


const home = require('../controllers/homes');

router.get('/', home);

module.exports = router;