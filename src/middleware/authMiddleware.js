import jwt from 'jsonwebtoken'

const SECRET = 'INEO-JWT-SECRET'

const authenticate = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
        return res.status(401).json({ error: 'Token not provided' })
    }

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: err.message })
        }

        req.userId = decoded.id

        return next()
    })
}

export default authenticate