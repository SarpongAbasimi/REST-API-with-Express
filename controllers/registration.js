const User = require('../model/user')
,mongoose = require('mongoose')
,Bcrypt = require('bcryptjs');


exports.registration = (req, res)=> {
  res.render('signup')
};


exports.submitRegistration = (req, res)=> {
  Bcrypt.hash(req.body.password, 10,(err, hash)=>{
    if(err){
      console.log(err.message)
    }
    const user = new User({
      _id: mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      password: hash
    });
    user.save().then(result =>{ console.log('registration was successful')})
    .catch(err=> console.log('There was an error'))
  });
  res.redirect('/registration/login')
};

exports.login = (req, res)=>{
  res.render('login');
}

