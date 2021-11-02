import express from 'express'
import errorHandler from './middlewares/error_handler'

const server = express()

// Basic Middlewares
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

// Public Folder
server.use('/public', express.static('public'))
server.get('/favicon.ico', (req, res) => {
  res.sendFile('favicon.ico', { root: 'public' })
})

// html-engine
server.set('view engine', 'pug');

// Catch Errors
server.use(errorHandler)

export default server
