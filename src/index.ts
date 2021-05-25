import express from 'express'
import commadb from './commadb'

const app = express()

app.get('/', (_, res) => {
    const db = new commadb({
        base: 'data'
    })
    return res.json(db.test())
})

app.listen(8000, () => console.log('Server is Running @ ⚡️'))