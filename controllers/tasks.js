const Task = require('../models/task.js')

function indexRoute(req, res, next) {
  Task.find().exec()
    .then(tasks => res.json(tasks))
    .catch(next)
}

module.exports = {
  index: indexRoute
}