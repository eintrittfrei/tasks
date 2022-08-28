import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'

import Task from '../models/task.js'

mongoose.connect(dbURI, (err, db) => {
  console.log(err)
  db.dropDatabase()

  Task.create([{
    task: 'Clean your room',
    completed: false
  },
  {
    task: 'Learn something new',
    completed: false
  },
  {
    task: 'fix this app',
    completed: false
  }
  ]).then(tasks => console.log(`${tasks.length} tasks created👷‍♀️`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})