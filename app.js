const mongoose = require('mongoose')
const express = require('express')
require('express-async-errors')
// const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

const Idea = require('./src/models/idea')
const User = require('./src/models/user')

const app = express()
mongoose.connect('mongodb://localhost/ideas-app', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json())
app.use(middleware.requestLogger)


app.get('/', (req, res) => {
  res.send('idea app')
})

// IDEA ROUTES ========================================
app.get('/ideas', async (req, res) => {
  const allIdeas = await Idea.find({})
  res.send(allIdeas)
})

app.get('/ideas/:id', async (req, res) => {
  const foundIdea = await Idea.findById(req.params.id)
  res.send(foundIdea)
})

app.post('/ideas', (req, res) => {
  const newIdea = new Idea(req.body)
  newIdea.save()
  .then(resp => console.log(resp))
  .catch(err => console.log(err))

  res.status(201).json(newIdea)
})

// USER routes =================
app.get('/users', async (req, res) => {
  const allUsers = await User.find({})
  res.status(200).json(allUsers)
})

app.post('/users', async (req, res) => {
  const newUser = await new User(req.body)
  await newUser.save()

  res.status(201).json(newUser)
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app