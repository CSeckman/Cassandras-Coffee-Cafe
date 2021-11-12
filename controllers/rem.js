import { Drink } from '../models/drink.js'
import { Profile } from '../models/profile.js'
import { Memory } from '../models/memory.js'

function index(req, res) {
  Drink.findById(req.params.id)
  .populate('memory')
  .then(drink => {
    res.render('reminiscence/index', {
      user: req.user,
      title: "Drink Details",
      drink
    })
  })
  .catch(err => {
    res.redirect('/')
  })
}

function createMemory(req, res) {
  req.body.author = req.user.profile._id
  const mem = new Memory(req.body)
  mem.save()
  Drink.findById(req.params.id)
  .then(drink => {
    drink.memory.push(mem)
    drink.save()
    .then(drink => {
      res.redirect(`/reminiscence/drinks/${drink._id}`)
    })
  }) 
  .catch(err => {
    res.redirect('/')
  })
}

function deleteMemory(req, res) {
  Drink.findById(req.params.drinkId)
  .then(drink => {
    const mems = drink.memory
    mems.remove({_id: req.params.memoryId})
    drink.save()
    .then(drink => {
      res.redirect(`/reminiscence/drinks/${req.params.drinkId}`)
    })
  })
  .catch(err => {
    res.redirect('/')
  })
}

export {
  index,
  deleteMemory,
  createMemory
}