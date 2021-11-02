import auth from '../auth/session'
import App from '../frontend/app'

const app = new App()
const apps = [auth, app.routes]

export default class LoadApps {
  loadApps(app) {
    apps.forEach((elm) => {
      app.use(elm)
    })
  }
}
