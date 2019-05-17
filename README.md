<h1 align='center'>
Building Restful API with Node & Express.
</h1>

<h4 align='center'>
To Use application.
</h4>

- ``Fork`` and ``clone this repo``.
- In your terminal cd into ``Express``.
- To run ``feature test`` type ``npm test``.
- To run application type ``npm dev run ``.

<h4 align='center'>
File Structure.
</h4>

<img width="255" alt="Screen Shot 2019-05-08 at 22 19 52" src="https://user-images.githubusercontent.com/37377831/57409167-8684b300-71df-11e9-9745-5e83686c5068.png">


<h4 align='center'>
What App Can Curretly Do.
</h4>

- A user can register at ``localhost:3000/registration/signup``.

- When there is an error during registration, the app is able to tell the user the errors.

> This is possible because of express validators.

<img width="1279" alt="Screen Shot 2019-05-12 at 13 08 25" src="https://user-images.githubusercontent.com/37377831/57581996-832b4900-74b7-11e9-9a50-0cc9c3c9d2dc.png">

- The application tells ``users`` when their registration email is ``taken``.

<img width="1275" alt="Screen Shot 2019-05-14 at 22 04 26" src="https://user-images.githubusercontent.com/37377831/57732143-4e281d80-7694-11e9-9c45-012b4fc2c6df.png">

<h4 align='center'>
Update
</h4>

> 17th May 2019 ( Used passportjs Local strategy to handle user Login ).

- ``npm install passport-local``.
- Inside app.js ``passport = require('passport')``.
- Add  this ``app.use(passport.initialize())`` & ``app.use(passport.session())``.
- You will need to ``require('./config/passportSetup')(passport)`` if you setup passport in a config folder.

```
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

 passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

```
- Running the code at the point will cause this error ``Error: failed to serialize user into session``.
- To avoid the error make sure to add this code.

```
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

 passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
));

```

- what does ``passport.serializeUser`` and ``passport.deserializeUser`` actually do ?

```
serializeUser determines which data of the user object should be stored in the session.
The result of the serializeUser method is attached to the session as req.session.passport.user = {}.

deserializeUser corresponds to the key of the user object that was given to the done function.
So that the whole object is retrieved with help of that key.
In my application the key is the user id.
```

- When a user tries to login in to the application, the user submits a post request to ``\registration\login``.
- We need to allow ``passportjs`` to handle this process.
- To do this add this to the ``post route``.

```
exports.postLogin = (req, res, next)=> {
  passport.authenticate('local',{
    successRedirect: '/dashbord',
    failureRedirect: '/registration/login'
  })(req, res, next);
};
```
- Note
- To find out if ``login`` worked, you can ``console.log`` the user being returned.
- This is what I get.

<img width="1279" alt="Screen Shot 2019-05-17 at 16 50 39" src="https://user-images.githubusercontent.com/37377831/57941547-279df880-78c7-11e9-9ea6-335a278fbbe9.png">


<h4 align='center'>
To Do
</h4>

- Add the ability for users to log in.(Done)
- Render ``error`` messages using flash if error occurs during login.
- Make the ability for a user to ``log out``.
- Restrict users form goind to certain endpoints of the app if they have not logged in.

> This will be done using Passport.js

<h5 align='center>
Tech Stack.
</h5>

- NodeJs.
- ExpressJs.
- Mocha Chai.
- supertest.
- Passport.js
