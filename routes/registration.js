const express = require('express');
const router = express.Router()

const registration = require('../controllers/registration')


router.get('/signup', registration.registration);
router.get('/login', registration.login);
router.post('/registered', registration.submitRegistration);

module.exports = router;