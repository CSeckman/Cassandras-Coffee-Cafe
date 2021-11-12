import { Drink } from '../models/drink.js'
import { Profile } from '../models/profile.js'

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
  req.body.iced = !!req.body.iced
  req.body.addShot = !!req.body.addShot
  req.body.whippedCream = !!req.body.whippedCream
  //set creator = user
  req.body.creator = req.user.profile._id
  Drink.create(req.body)
  .then((drink)=> {
    res.redirect(`/drinks/${drink._id}`)
  })
  .catch(err => {
    res.redirect('/')
  })
}

function addToFavs (req, res) {
  Profile.findById(req.user.profile._id) 
  .then (profile => {
    profile.myFavs.push(req.params.id)
    profile.save()
    .then(profile => {
      res.redirect(`/profiles/${profile._id}`)
    })
  })
  .catch(err => {
    res.redirect('/')
  })
}


function show(req, res) {
  Drink.findById(req.params.id)
  .then(drink => {
    res.render('drinks/show', {
      user: req.user,
      title: "Drink Details",
      drink
    })
  })
  .catch(err => {
    res.redirect('/')
  })
}

function edit(req, res) {
  Drink.findById(req.params.id)
  .then(drink => {
    res.render('drinks/edit', {
      title: 'Edit Drink Size',
      drink,
      user: req.user
    })
  })
  .catch(err => {
    res.redirect('/')
  })
}

function update(req, res) {
  Drink.findByIdAndUpdate(req.params.id, req.body) 
  .then(drink => {
    res.redirect(`/profiles/${req.user.profile._id}`)
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