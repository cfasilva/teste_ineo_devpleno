import knex from '../database/connection.cjs'

class UsersController {
    async index (req, res) {
        const users = await knex('users').select('*')
        return res.json(users)
    }

    async show (req, res) {
        const { id } = req.params
        const user = await knex('users').where('id', id).first()

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        return res.json(user)
    }

    async create (req, res) {
        const { name, email, password } = req.body

        await knex('users').insert({ name, email, password })

        return res.status(201).send()
    }

    async update (req, res) {
        const { id } = req.params
        const { name, email, password } = req.body

        await knex('users').where('id', id).update({ name, email, password })

        return res.send()
    }

    async delete (req, res) {
        const { id } = req.params

        await knex('users').where('id', id).delete()

        return res.send()
    }

}

export default UsersController