const mongoose = require('mongoose')
const express = require('express')

const app = express()
mongoose.connect('mongodb://localhost/ideas-app', { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
  res.send('Light bulbs')
})

const Idea = mongoose.model('Idea', {
  name: String,
  description: String,
  image: String,
  tags: String,
  difficulty: String
})

const testIdea = new Idea({
  name: 'test',
  description: 'my first idea',
  image: 'www.url.com',
  tags: 'code',
  difficulty: 'insane'
})

const User = mongoose.model('User', {
  username: String,
  email: String,
  name: String,
  password: String
})

const loganTest = new User({
  username: 'Lego',
  name: 'Logan',
  email: 'Lklein',
  password: 'password'
})

// loganTest.save().then(() => console.log('lightbulb'))
// .catch(err => console.log(err))

app.listen('3000', () => {
  console.log('Server is running on port 3000')
})