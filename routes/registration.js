const express = require('express');
const router = express.Router()

router.get('/signup', (req, res)=>{
  res.send('sign up here');
});

module.exports = router;