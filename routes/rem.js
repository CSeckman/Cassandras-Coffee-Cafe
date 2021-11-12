import { Router } from 'express'
import * as remCtrl from '../controllers/rem.js'
const router = Router()


router.get('/drinks/:id', isLoggedIn, remCtrl.index)
//create a memory
router.post('/:id/memories', isLoggedIn, remCtrl.createMemory)
//delete memory
router.delete('/:drinkId/memories/:memoryId', isLoggedIn, remCtrl.deleteMemory)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}