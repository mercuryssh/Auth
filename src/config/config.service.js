import dotenv from 'dotenv'
import { existsSync } from 'fs'
import { join } from 'path'
import LoadApps from './loadApp.service'

export default class ConfigService extends LoadApps {
  envFile = String

  constructor() {
    super()

    switch (true) {
      case existsSync(join(process.cwd(), '.env.local')):
        this.envFile = '.env.local'
        break

      case existsSync(join(process.cwd(), '.env')):
        this.envFile = '.env'
        break

      default:
        throw new Error('env.local or .env file not found')
    }
    this.loadEnv()
  }

  loadEnv() {
    if (process.env.NODE_ENV !== 'production') {
      const result = dotenv.config({
        path: join(process.cwd(), this.envFile),
      })

      if (result.error) {
        throw result.error
      }
    }
  }
}
