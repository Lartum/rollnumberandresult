const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const resultRoute = require('../routes/result')

app.use(bodyParser.json())

app.use('/api/result', resultRoute)

const PORT = process.env.PORT

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})
