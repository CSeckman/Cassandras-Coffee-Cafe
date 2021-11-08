import { Router } from 'express'

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Cassandra\'s Coffee Cafe', user: req.user ? req.user : null })
})

export {
  router
}