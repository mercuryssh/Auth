import express from 'express'
import logger from './config/logger'

export const app = express()
app.listen(4444, () => {
  logger.verbose('The Show Must Go On')
})
