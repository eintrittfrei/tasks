const router = require('express').Router()
const tasks = require('../controllers/tasks')


router.route('/tasks')
  .get(tasks.index)
  .post(tasks.create)

router.route('/tasks/:id')
  .get(tasks.show)
  .put(tasks.update)
  .delete(tasks.delete)


module.exports = router