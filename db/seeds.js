import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'

import User from '../models/user.js'
import users from './users.js'
import Task from '../models/task.js'
import tasks from './tasks.js'

const seededDB = async () => {
  
  try {

    await mongoose.connect(dbURI)

    await mongoose.connection.db.dropDatabase()
    console.log('DB dropped 🥰')

    const seededUsers = await User.create(users)
    console.log(`${users.length} users created 😎`)
    console.log('seededUsers', seededUsers)

    const tasksWithAddedUser = await tasks.map(task => {
      return { ...task, owner: seededUsers[0]._id }
    })

    const seededTasks = await Task.create(tasksWithAddedUser)
    console.log(`${seededTasks.length} tasks created 👷‍♀️`)
    console.log(seededTasks)
    
  } catch (err) {
    console.log('Error ==>', err)
    console.log('Something has gone wrong!')
    await mongoose.connection.close()
    console.log('Chiao!! 🥳')
  }
}

seededDB()