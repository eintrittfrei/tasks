import express from 'express'
import { loginUser, registerUser, allUsers } from '../controllers/auth.js'
import { oneUser } from '../controllers/user.js'
import { indexRoute, tasksShow, tasksCreate, updateOne, tasksDelete , addComment, deleteComment } from '../controllers/tasks.js'
import { secureRoute } from  './secureRoute.js'
import { categoryIndex } from '../controllers/category.js'

const router = express.Router()

router.route('/tasks')
  .get(indexRoute)
  .post(secureRoute, tasksCreate)

router.route('/tasks/:id')
  .get(tasksShow)
  .put(secureRoute, updateOne)
  .delete(secureRoute ,tasksDelete)

router.route('/tasks/:id/comments')
  .post(secureRoute, addComment )

router.route('/tasks/:id/comments/:commentId')
  .delete(secureRoute, deleteComment)
  
router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/users')
  .get(allUsers)

router.route('/profile')
  .get(secureRoute, oneUser )

router.route('/category')
  .get(categoryIndex)

export default router