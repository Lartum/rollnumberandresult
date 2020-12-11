const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const resultRoute = require('../routes/result')

app.use(bodyParser.json())

app.use('/api/result', resultRoute)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})
