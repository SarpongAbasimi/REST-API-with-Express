const express = require('express');
const router = express.Router()

const registration = require('../controllers/registration')


router.get('/signup', registration.registration);
router.get('/login', registration.login);
router.get('/logout', registration.logout);
router.post('/registered', registration.submitRegistration);
router.post('/login', registration.postLogin)

module.exports = router;