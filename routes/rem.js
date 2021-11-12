import { Router } from 'express'
import * as remCtrl from '../controllers/rem.js'
const router = Router()


router.get('/drinks/:id', isLoggedIn, remCtrl.index)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}