const express = require('express')
 ,app = express()
 ,path = require('path')
 ,mongoose = require('mongoose')
 ,bodyParser = require('body-parser')
 ,expressValidator = require('express-validator');

require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,('views')));

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(require('./routes/index'));
app.use('/homes', require('./routes/home'));
app.use('/registration', require('./routes/registration'));

const uri = process.env.MONGODB_URL;
mongoose.connect(uri, { useNewUrlParser: true });

let port = process.env.PORT || 3000
app.listen(port,()=>{
console.log(`We are live on ${port}`);
});

module.exports = app;

