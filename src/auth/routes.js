import { Router } from 'express'
import passport from './passport'

const routes = Router()

routes.post('/login', passport.authenticate('local'), (req, res, next) => {
  res.status(200)
})

export default routes
