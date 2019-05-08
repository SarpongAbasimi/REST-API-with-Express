const request = require('supertest');
const app = require('../../app');

describe('GET /',()=>{
  it('should have a welcome message', (done)=>{
    request(app)
    .get('/')
    .expect(200)
    .expect('Hello welcome', done)
  })
});