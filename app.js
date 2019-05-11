const express = require('express')
 ,app = express()
 ,path = require('path')
 ,mongoose = require('mongoose')
 ,bodyParser = require('body-parser');

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('./routes/index'));
app.use('/homes', require('./routes/home'));
app.use('/registration', require('./routes/registration'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,('views')));

const uri =process.env.MONGODB_URL;
mongoose.connect(uri, { useNewUrlParser: true });

let port = process.env.PORT || 3000
app.listen(port,()=>{
console.log(`We are live on ${port}`);
});

module.exports = app;

