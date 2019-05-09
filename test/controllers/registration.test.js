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
    .post('/registration/signup')
    .send({'name':'chris', 'email':'chris@demo.com',
     'password':'demo', 'confrim':'demo'})
    .expect(302)
    .expect('Location',/\/login/, done)
  });
});

