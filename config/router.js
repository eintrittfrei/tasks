import express from 'express'
import { loginUser, registerUser, allUsers } from '../controllers/auth.js'
import { indexRoute, tasksShow, tasksCreate, updateOne, tasksDelete } from '../controllers/tasks.js'
import { secureRoute } from  './secureRoute.js'
const router = express.Router()

router.route('/tasks')
  .get(indexRoute)
  .post(secureRoute, tasksCreate)

router.route('/tasks/:id')
  .get(tasksShow)
  .put(secureRoute, updateOne)
  .delete(secureRoute ,tasksDelete)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/users')
  .get(allUsers)

export default router