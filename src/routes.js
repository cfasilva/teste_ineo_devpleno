import express from 'express'
const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello World' })
})

import UsersController from './controllers/UsersController.js'
const usersController = new UsersController()

routes.get('/users', usersController.index)
routes.get('/users/:id', usersController.show)
routes.post('/users', usersController.create)
routes.put('/users/:id', usersController.update)
routes.delete('/users/:id', usersController.delete)

export default routes