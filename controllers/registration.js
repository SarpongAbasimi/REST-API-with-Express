const User = require('../model/User')
,mongoose = require('mongoose')
,Bcrypt = require('bcryptjs');

exports.registration = (req, res)=> {
  const errors = req.session.errors
  res.render('signup',{errors:errors})
};


const checkValidationErrors = (req)=>{
  req.check('email','The email you entered is invalid').isEmail();
  req.check('password','Password must be at least 6 characters long').isLength({ min: 6});
  req.check('password','Password must be equal to your confirmation password').equals(req.body.confirm_password);
}

const hashUserPassword = ({name, email, password})=>{
  Bcrypt.hash(password, 10,(err, hash)=>{
  if(err){
      console.log(err)
    }else{
      const user = new User({_id: mongoose.Types.ObjectId(), name, email, password: hash});
      user.save().then(result =>{ console.log('registration was successful')})
      .catch(err=> console.log('There was an error'));
    }
  });
};

exports.submitRegistration = (req, res)=> {
  checkValidationErrors(req)
  const errors = req.validationErrors();    
  const {email} = req.body;

  let holder =[]
  for(let i = 0; i < errors.length; i++){holder.push((errors[i].msg))}

  User.findOne({email}, (err,emailFound)=>{
    if(err){console.log(err)}
    if(emailFound && errors){
      req.session.errors = [...holder,'Email is already taken'];
      res.redirect('/registration/signup');
    }else if(!emailFound && errors){
      req.session.errors = [...holder];
      res.redirect('/registration/signup');
    }else{
      hashUserPassword(req.body)
      res.redirect('/registration/login')
    }
  });
};

exports.login = (req, res)=>{
  res.render('login')
}

