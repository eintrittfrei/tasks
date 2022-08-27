const router = require('express').Router()
const tasks = require('../controllers/tasks')
const users = require('../controllers/auth.js')
// const { loginUser } = require('../controllers/users')

router.route('/tasks')
  .get(tasks.index)
  .post(tasks.create)

router.route('/tasks/:id')
  .get(tasks.show)
  .put(tasks.update)
  .delete(tasks.delete)

router.route('/register')
  .post(users.create)


module.exports = router