const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
var UserController = require('./controllers/user.js')

/// set
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index', {title: 'Index'})
})

/* GET users listing. */
app.get('/api/user/:id', UserController.findByName)
app.get('/api/users', UserController.findAll)
app.post('/api/users', UserController.create)
app.put('/api/user/:id', UserController.update)
app.delete('/api/user/:id', UserController.remove)

// --------------------------------- Adding static ------------------------
// app.use(express.static('public'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
