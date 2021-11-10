import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
const router = Router()


router.get('/:id', isLoggedIn, profilesCtrl.show )
router.delete('/favorites/:id', isLoggedIn, profilesCtrl.deleteFav)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  console.log("I am in router")
  res.redirect("/auth/google");
}

export {
  router
}