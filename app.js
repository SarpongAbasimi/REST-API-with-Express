var express = require('express')
 ,app = express()
 ,router = require('./controllers/index');

app.use(router)
app.use('/homes', require('./controllers/homes'));

let port = process.env.PORT || 3000
app.listen(port,()=>{
console.log(`We are live on ${port}`)
});

module.exports = app;