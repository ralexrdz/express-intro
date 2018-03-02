var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
mongoose.connect('mongodb://localhost/clasedb')

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 11,
    max: 99
  }
})

userSchema.pre('save', function (next) {
  var user = this
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next()
  // hash the password using our new salt
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) return next(err)

    // override the cleartext password with the hashed one
    user.password = hash
    next()
  })
})

module.exports = mongoose.model('user', userSchema)
