const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: {type: String, unique:true},
  password: String,
  created: {type:Date, default: Date.now}
});

const user = mongoose.model('User', userSchema);

module.exports = user;