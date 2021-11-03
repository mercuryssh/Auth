import { Router } from 'express'
import session from './session'
import routes from './routes'

export default class Auth {
  routes = Router()

  constructor() {
    this.routes.use(session)
    this.routes.use('/auth', routes)
  }
}

export const middleware = new Auth().routes
