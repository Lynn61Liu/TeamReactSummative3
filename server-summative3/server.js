const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const api = require('./routes/ZIP.routes')
mongoose
  .connect('mongodb+srv://yoobeeteamone:yoobeeteamone@formativetwo.kyx6g.mongodb.net/ZIP?retryWrites=true&w=majority')
  .then((x) => {
    console.log(`Connected to Mongo from sever.js! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
app.use('/public', express.static('public'))
app.use('/api', api)
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
    next(new Error('Something went wrong about path'))
  })
})
app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})