const express = require('express')
,app = require('../../app')
, request = require('supertest');

describe('GET/ Register',()=>{
  it('allows users to register', (done)=>{
    request(app)
    .get('/registration/signup')
    .expect(200)
    .expect('sign up here', done);
  });
});