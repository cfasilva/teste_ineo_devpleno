import request from 'supertest'
import express from 'express'
import routes from '../routes.js'

const app = express()
app.use('/', routes)

describe('GET /', () => {
  it('should return a JSON object with a message "Hello World"', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: 'Hello World' })
  })
})