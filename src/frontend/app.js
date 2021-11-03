import { Router } from 'express'

export default class App {
  routes = Router()

  constructor() {
    this.routes.get('/', (req, res) => {
      res.render(__dirname + '/index', {
        title: 'Express Auth',
        msg: req.session.cookie._expires,
      })
    })
  }
  implement() {
    return this.routes
  }
}

export const middleware = new App().routes