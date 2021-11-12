import { Drink } from '../models/drink.js'
import { Profile } from '../models/profile.js'
import { Memory } from '../models/memory.js'

//render form to order a new drink
function newDrink(req, res) {
  //render new view which holds form
  res.render('drinks/new', {
    title: 'Order Custom Drink',
    user: req.user
  })
}

//create drink in db with the form data
function create(req, res) { 
  // handle booleans
  req.body.iced = !!req.body.iced
  req.body.addShot = !!req.body.addShot
  req.body.whippedCream = !!req.body.whippedCream
  //set creator = user
  req.body.creator = req.user.profile._id
  //delete property of drink if key value is left blank
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  //create drink from Model
  Drink.create(req.body)
  .then((drink)=> {
    res.redirect(`/drinks/${drink._id}`)
  })
}

function show(req, res) {
  Drink.findById(req.params.id)
  .populate('memory')
  .then(drink => {
    // console.log(drink)
    res.render('drinks/show', {
      user: req.user,
      title: "Drink Details",
      drink
    })
  })
}


function addToFavs (req, res) {
  // find profile we want to add drink to
  Profile.findById(req.user.profile._id, function(err, profile) {
    // push the drink obj id to that profile
    profile.myFavs.push(req.params.id)
    // save 
    profile.save(function(err) {
    // redirect to profile/index view
    res.redirect(`/profiles/${profile._id}`)
    })
  }
)}

function edit(req, res) {
  Drink.findById(req.params.id)
  .then(drink => {
    console.log(drink)
    res.render('drinks/edit', {
      title: 'Edit Drink Size',
      drink,
      user: req.user
    })
  })
}

function update(req, res) {
  Drink.findByIdAndUpdate(req.params.id, req.body) 
  .then(drink => {
    res.redirect(`/drinks/${drink._id}`)
  })
  .catch(err => {
    res.redirect(`/drinks/${drink._id}/edit`)
  })
}

export {
  newDrink as new, 
  create, 
  show,
  addToFavs,
  edit, 
  update
}