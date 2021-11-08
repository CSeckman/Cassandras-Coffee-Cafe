import { Router } from 'express'
import * as drinksCtrl from '../controllers/drinks.js'
const router = Router()

//index all drinks
// router.get('/', isLoggedIn, drinksCtrl.index)
// order a new custom drink 
router.get('/new', isLoggedIn, drinksCtrl.new)
// create drink from form
router.post('/', isLoggedIn, drinksCtrl.create)
// show that drink
router.get('/:id', isLoggedIn, drinksCtrl.show)
// push drink to profile
router.get('/:id/profiles', isLoggedIn, drinksCtrl.addToFavs)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}