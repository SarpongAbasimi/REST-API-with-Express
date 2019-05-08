const request = require('supertest');
const app = require('../../app');

describe('GET/homes', ()=>{
  it('shows a list of homes', (done)=>{
    request(app)
    .get('/homes')
    .expect(200)
    .expect('Welcome to the home page', done);
  });
});