require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => res.send('hello nama saya herdiyana'))

app.listen(PORT, () => console.log(`running on ${PORT}`))