import request from 'supertest'
import App from './app'
import server from './app'

describe('App production', () => {
  describe('App Test', () => {
    const app = new App()
    it('should be define', () => {
      expect(app).toBeDefined()
    })
  })

  describe('Server Test', () => {
    it('should server be response', () => {
      request(server).get('/').expect('200')
    })
  })
})
