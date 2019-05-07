var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.get('/', (req, res)=>{
  var inform = ['sar', 'chr','hello','lond']
  res.render('index');
});

app.post('/info',urlencodedParser,(req, res)=>{
  console.log(req.body);
  res.render('contact')
});


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`Listening on port ${port}`)
});

module.exports = app