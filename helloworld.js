const express = require('express')
const bodyParser = require('body-parser')
const app = express()

/// set
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Route for GET Method
app.get('/user/:id', (req, res) => {
  console.log(req.query) // viene en url después del signo `?`
  res.send('Hello World! User with ID: ' + req.params.id)
})

// Route for POST method

app.post('/user', (req, res) => {
  console.log(req.body)
  res.send('Post complete')
})

// Route for PUT method

app.put('/user/:id', (req, res) => {
  console.log(req.body)
  res.send('Put complete on object with ID:' + req.params.id)
})

// Route for DELETE method

app.delete('/user/:id', (req, res) => {
  console.log(req.body)
  res.send('Delete complete on object with ID:' + req.params.id)
})

// --------------------------------- Adding static ------------------------
// app.use(express.static('public'))

app.listen(3000, () => console.log('Example app listening on port 3000!')
