const express = require('express');
const router = express.Router()

const registration = require('../controllers/registration')


router.get('/signup', registration.registration);
router.post('/signup', registration.registered);

module.exports = router;