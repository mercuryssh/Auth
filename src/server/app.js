import server from './server'
import ConfigService from '../config/config.service'
import logger from '../config/logger'

export default class App extends ConfigService {
  constructor() {
    super()
    this.server = server
    this.server.set('port', process.env.PORT)
  }

  run() {
    const port = this.server.get('port')
    this.server.listen(port, () => {
      logger.verbose('The Show Must Go On')
    })
  }
}
