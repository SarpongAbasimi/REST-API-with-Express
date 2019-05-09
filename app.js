const express = require('express')
 ,app = express()
 ,path = require('path');

require('dotenv').config()


app.use(require('./routes/index'))
app.use('/homes', require('./routes/home'));
app.use('/registration', require('./routes/registration'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,('views')))

let port = process.env.PORT || 3000
app.listen(port,()=>{
console.log(`We are live on ${port}`)
});

module.exports = app;