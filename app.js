const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const viewRoutes = require('./routes/views/user')
const apiRoutes = require('./routes/apis/user')

/// set
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

viewRoutes(app)
apiRoutes(app)

// --------------------------------- Adding static ------------------------
// app.use(express.static('public'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
