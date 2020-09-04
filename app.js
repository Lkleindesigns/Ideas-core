const mongoose = require('mongoose')
const express = require('express')
require('express-async-errors')
// const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const ideasRouter = require('./src/controllers/ideas')
const usersRouter = require('./src/controllers/users')
const app = express()
mongoose.connect('mongodb://localhost/ideas-app', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.use(express.json())
app.use(middleware.requestLogger)


app.get('/', (req, res) => {
  res.send('idea app')
})

app.use('/api/users', usersRouter)
app.use('/api/ideas', ideasRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app