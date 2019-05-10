const express = require('express')
 ,app = express()
 ,path = require('path')
 ,mongoose = require('mongoose');

require('dotenv').config()

const PASS = process.env.MONGODB_URL;
const uri =`mongodb+srv://sarpong:${PASS}@learningmongodb-aecg9.mongodb.net/test?retryWrites=true`

app.use(require('./routes/index'))
app.use('/homes', require('./routes/home'));
app.use('/registration', require('./routes/registration'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,('views')))

mongoose.connect(uri, { useNewUrlParser: true });

let port = process.env.PORT || 3000
app.listen(port,()=>{
console.log(`We are live on ${port}`);
});

module.exports = app;

