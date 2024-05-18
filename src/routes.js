import express from 'express'

import UsersController from './controllers/UsersController.js'
import ProtestsController from './controllers/ProtestsController.js'
import EmolumentsController from './controllers/EmolumentsController.js'

import authenticate from './middleware/authMiddleware.js'

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello World' })
})

const usersController = new UsersController()
routes.post('/register', usersController.register)
routes.post('/login', usersController.login)

const protestsController = new ProtestsController()
routes.get('/protests', authenticate, protestsController.index)
routes.get('/protests/:id', authenticate, protestsController.show)
routes.post('/protests', authenticate, protestsController.create)
routes.put('/protests/:id', authenticate, protestsController.update)
routes.delete('/protests/:id', authenticate, protestsController.delete)

const emolumentsController = new EmolumentsController()
routes.get('/emoluments', authenticate, emolumentsController.index)
routes.get('/emoluments/:id', authenticate, emolumentsController.show)
routes.post('/emoluments', authenticate, emolumentsController.create)
routes.put('/emoluments/:id', authenticate, emolumentsController.update)
routes.delete('/emoluments/:id', authenticate, emolumentsController.delete)

export default routes