const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (req, res) => {
  const allUsers = await User.find({})
  res.status(200).json(allUsers)
})

usersRouter.post('/', async (req, res) => {
  const newUser = await new User(req.body)
  await newUser.save()

  res.status(201).json(newUser)
})

usersRouter.patch('/:id', async (req, res) => {
  const updates = req.body
  const updatedUser = await User.findByIdAndUpdate(req.params.id, updates, { new: true })

  res.send(updatedUser)
})

usersRouter.delete('/:id', async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id)
  res.send(deletedUser)
})

module.exports = usersRouter