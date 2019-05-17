const LocalStrategy = require('passport-local').Strategy
,User = require('../model/User')
,Bcrypt = require('bcryptjs');


module.exports = (passport)=>{
  passport.use(new LocalStrategy(
    { usernameField:'email' }, (email, password, done)=>{
      User.findOne({ email:email})
      .then(user=>{
        if(!user){
          console.log('User not found')
          return done(null, false, {message: 'Incorrect email.'})
        }
        Bcrypt.compare(password, user.password,(err,isMatch)=>{
          if(isMatch){
            console.log(user)
            return done(null, user);
          }else{
            return done(null, false, {message: 'Password incorrect'})
          }
        });
      })
      .catch(err => console.log(err))
    }
  ));
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
}

