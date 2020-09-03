const mongoose = require('mongoose')

const Idea = mongoose.model('Idea', {
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  }
})

module.exports = Idea