import express from 'express'

const server = express()

// Basic Middlewares
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

// Public Folder
server.use('/public', express.static('public'))

export default server
