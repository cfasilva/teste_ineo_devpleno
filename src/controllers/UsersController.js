import knex from '../database/connection.cjs'
import bcrypt from 'bcryptjs'

class UsersController {
    async register (req, res) {
        const { name, email, password } = req.body

        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                return res.status(500).json({ error: err })
            }

            await knex('users').insert({ name, email, password: hash })

            return res.status(201).send()
        })
    }
}

export default UsersController