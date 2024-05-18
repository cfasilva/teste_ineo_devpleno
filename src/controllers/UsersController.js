import knex from '../database/connection.cjs'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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

    async login (req, res) {
        const { email, password } = req.body

        const user = await knex('users').where({ email }).first()

        if (!user) {
            return res.status(401).json({ error: 'User not found' })
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(500).json({ error: err })
            }

            if (!result) {
                return res.status(401).json({ error: 'Invalid credentials' })
            }
        })

        const SECRET = 'INEO-JWT-SECRET'
        const token = jwt.sign({ id : user.id }, SECRET, { expiresIn: '1h' })

        return res.json({ token })
    }
}

export default UsersController