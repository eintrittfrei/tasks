const router = require('express').Router()
const tasks = require('../controllers/tasks')

router.route('/tasks').get(tasks.index)

module.exports = router