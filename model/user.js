const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String,
  created: {type:Date, default: Date.now}
});

const user = mongoose.model('User', userSchema);

module.exports = user;