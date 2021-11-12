import { Drink } from '../models/drink.js'
import { Profile } from '../models/profile.js'
import { Memory } from '../models/memory.js'

function index(req, res) {
  Drink.findById(req.params.id)
  .populate('memory')
  .then(drink => {
    // console.log(drink)
    res.render('reminiscence/index', {
      user: req.user,
      title: "Drink Details",
      drink
    })
  })
}

function deleteRem(req, res) {
  
}

export {
  index,
  deleteRem
}