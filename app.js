const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var UserController = require('./controllers/user.js')

/// set
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'handlebars'); // por default


/* GET users listing. */
app.get('/user/:id', UserController.findByName)
app.get('/users', UserController.findAll)
app.post('/users', UserController.create)
app.put('/user/:id', UserController.update)
app.delete('/user/:id', UserController.remove)

// --------------------------------- Adding static ------------------------
// app.use(express.static('public'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
