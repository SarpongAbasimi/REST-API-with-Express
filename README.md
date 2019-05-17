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

> 17th May 2019 (Used passportjs Local strategy to handle user Login).

- ``npm install passport-local``.
- Inside app.js ``passport = require('passport')``.
- Add  this ``app.use(passport.initialize())`` & ``app.use(passport.session())``.
> You will need to require('./config/passportSetup')(passport) if you setup passport in a config folder.

```
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

[passport.use(new LocalStrategy](#)(
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
