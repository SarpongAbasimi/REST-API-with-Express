var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var assert = require('assert')

require('dotenv').config()

var MongoClient = require('mongodb').MongoClient;

var url = process.env.DATABASE_URL;


app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render('index');
});

app.get('/userinfo/', (req, res)=>{
    let array = []
    MongoClient.connect((url), function(err, client){
      var db = client.db('test')
      assert.equal(null, err)
      var userData = db.collection('space').find({});
      userData.forEach(function(doc, err){
        assert.equal(null, err);
        array.push(doc)
      }, function(){
        db.close;
        res.render('userInfo',{payload:array})
      });
    });
});

app.post('/info',urlencodedParser,(req, res)=>{
  var data = {
    location: req.body.location,
    price: req.body.price,
    description: req.body.description
  }

  MongoClient.connect((url), function(err, client){
    var db = client.db('test')
    assert.equal(null, err);
    db.collection('space').insertOne(data, function(){
    assert.equal(null, err);
    console.log(' I make it out');
    db.close
    });
  });
  res.redirect('/userinfo')
});


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`Listening on port ${port}`)
}); 

module.exports = app