import express from 'express'

import UsersController from './controllers/UsersController.js'
import ProtestsController from './controllers/ProtestsController.js'
import EmolumentsController from './controllers/EmolumentsController.js'

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello World' })
})

const usersController = new UsersController()
routes.get('/users', usersController.index)
routes.get('/users/:id', usersController.show)
routes.post('/users', usersController.create)
routes.put('/users/:id', usersController.update)
routes.delete('/users/:id', usersController.delete)

const protestsController = new ProtestsController()
routes.get('/protests', protestsController.index)
routes.get('/protests/:id', protestsController.show)
routes.post('/protests', protestsController.create)
routes.put('/protests/:id', protestsController.update)
routes.delete('/protests/:id', protestsController.delete)

const emolumentsController = new EmolumentsController()
routes.get('/emoluments', emolumentsController.index)
routes.get('/emoluments/:id', emolumentsController.show)
routes.post('/emoluments', emolumentsController.create)
routes.put('/emoluments/:id', emolumentsController.update)
routes.delete('/emoluments/:id', emolumentsController.delete)

export default routes