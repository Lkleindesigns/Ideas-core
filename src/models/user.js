const mongoose = require('mongoose')

const User = mongoose.model('User', {
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
})

module.exports = User