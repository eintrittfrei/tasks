const mongoose = require('mongoose')
const { dbURI } = require('../config/environment.js')

const Task = require('../models/task.js')

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
  }
  ]).then(tasks => console.log(`${tasks.length} tasks created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})