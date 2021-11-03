import { middleware } from '../auth'
import App from '../frontend/app'

const apps = [middleware, new App().implement()]

export default class LoadApps {
  loadApps(app) {
    apps.forEach((elm) => {
      app.use(elm)
    })
  }
}
