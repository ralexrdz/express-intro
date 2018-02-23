var UserModel = require('../models/user')

function findByName (req, res, next) {
  UserModel.find({name: req.params.id}, function (err, users) {
    if (err) console.log(err)
    res.send(users)
  })
}
function findAll (req, res, next) {
  UserModel.find({}, function (err, users) {
    if (err) console.log(err)
    res.send(users)
  })
}
function create (req, res, next) {
  let newUser = new UserModel(req.body)
  newUser.save(function (err, user) {
    if (err) console.log(err)
    res.send(user)
  })
}
function update (req, res, next) {
  UserModel.findOne({name: req.params.id}, function (err, user) {
    if (err) console.log(err)
    if (req.body.name) user.name = req.body.name
    user.age = req.body.age
    user.save(function (err, savedUser) {
      if (err) console.log(err)
      res.send(savedUser)
    })
  })
}
function remove (req, res, next) {
  UserModel.findOne({name: req.params.id}, function (err, res) {
    if (err) console.log(err)
    res.remove()
  })
}

module.exports = {
  findByName,
  findAll,
  create,
  update,
  remove
}
