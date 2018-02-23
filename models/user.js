var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/clasedb')

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 11,
    max: 99
  }
})

module.exports = mongoose.model('user', userSchema)
