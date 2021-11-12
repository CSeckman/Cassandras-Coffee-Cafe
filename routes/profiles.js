import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
const router = Router()

router.get('/reminiscence/drinks/:id', isLoggedIn, profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show )
router.delete('/favorites/:id', isLoggedIn, profilesCtrl.deleteFav)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}