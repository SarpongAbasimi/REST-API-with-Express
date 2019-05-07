var request = require('supertest');
var app = require('../app');

describe('Testing Home Page', function(){
  it('says hello world', function(done){
    request(app).get('/')
    .expect(200)
    .expect(/Hello/, done);
  });
});


