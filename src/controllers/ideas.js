const ideasRouter = require('express').Router()
const Idea = require('../models/idea')

ideasRouter.post('/', async (req, res) => {
  const newIdea = new Idea(req.body)
  await newIdea.save()
 
  res.status(201).json(newIdea)
})

ideasRouter.get('/', async (req, res) => {
  const allIdeas = await Idea.find({})
  res.status(200).send(allIdeas)
})

ideasRouter.get('/:id', async (req, res) => {
  const foundIdea = await Idea.findById(req.params.id)
  res.status(200).send(foundIdea)
})

ideasRouter.patch('/:id', async (req, res) => {
  const updates = req.body
  const updatedIdea = await Idea.findByIdAndUpdate(req.params.id, updates, { new: true })

  res.send(updatedIdea)
})

ideasRouter.delete('/:id', async (req, res) => {
  const deletedIdea = await Idea.findByIdAndDelete(req.params.id)

  res.send(deletedIdea)
})

module.exports = ideasRouter