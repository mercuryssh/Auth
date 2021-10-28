import request from 'supertest'
import { app } from '../src/main'

describe('App production', () => {
  it('should ', () => {
    request(app).get('/').expect('200')
  })
})
