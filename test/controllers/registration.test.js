const app = require('../../app')
, request = require('supertest');

describe('GET/ signup',()=>{
  it('allows users to register', (done)=>{
    request(app)
    .get('/registration/signup')
    .expect(200)
    .expect(/sign up here/, done);
  });
});

describe('POST/ signup', ()=>{
  it('allows users to fill in a form', (done)=>{
    request(app)
    .post('/registration/registered')
    .send({'name':'chris', 'email':'chris@demo.com',
     'password':'demo', 'confrim_password':'demo'})
    .expect(302)
    .expect('Location',/\/login/, done)
  });
});

describe('GET/ login', ()=>{
  it('gives users success message if signup is successful', (done)=>{
    request(app)
    .get('/registration/login')
    .expect(200)
    .expect(/Sign up was successful/, done)
  });
});

