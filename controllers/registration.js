const User = require('../model/user')
,mongoose = require('mongoose');


exports.registration = (req, res)=> {
  res.render('signup')
};


exports.submitRegistration = (req, res)=> {
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password:req.body.password
  });

  user.save().then(result=>{
    console.log(result)
  }).catch(err=> console.log('There was an error'))
  res.redirect('/login')
};

exports.login = (req, res)=>{
  res.render('login');
}

