import request from 'supertest'
import express from 'express'
import routes from '../routes.js'
import knex from 'knex'
import mockDb from 'mock-knex'

const app = express()
app.use(express.json())
app.use('/', routes)

describe('GET /', () => {
  it('should return a JSON object with a message "Hello World"', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: 'Hello World' })
  })
})

describe('User Register', () => {
  const db = knex({ client: 'sqlite'})
  mockDb.mock(db)

  it('must register a user successfully', async () => {
    const body = {
      name: 'Cleber Abreu',
      email: 'cleberfasilva@gmail.com',
      password: '123456'
    }

    const response = await request(app)
      .post('/register')
      .send(body)
      .set('Content-Type', 'application/json')
      
    expect(response.status).toBe(201)
  })

  it('should return error when registering user with null password', async () => {
    const body = {
      name: 'Cleber Abreu',
      email: 'cleberfasilva@gmail.com',
      password: null
    }

    const response = await request(app)
      .post('/register')
      .send(body)
      .set('Content-Type', 'application/json')
      
    expect(response.status).toBe(500)
    expect(response.body).toHaveProperty('error')
  })

  mockDb.unmock(db)
})