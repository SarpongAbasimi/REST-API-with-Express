const express = require('express');
const router = express.Router();
const check  = require('../config/auth')

const home = require('../controllers/home');

router.get('/',check, home.home);
router.get('/dashbord', check, home.dashbord)

module.exports = router;