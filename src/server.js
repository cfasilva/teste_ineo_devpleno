import express, { json, urlencoded } from 'express'

const app = express()

app.use(json())
app.use(urlencoded({ extended: false }))

app.listen(3333, () => console.log(`Running at http://localhost:3333`))