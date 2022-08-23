const Task = require('../models/task.js')

// Index Route display all Tasks 
async function indexRoute(_req, res, next) {
  try {
    await Task
      .find()
      .exec()
      .then(tasks => res.json(tasks))
      .catch(next)
  } catch (err) {
    console.log(err)
  }
}

//SHOW ROUTE
async function tasksShow(req, res) {
  const taskId = req.params.id
  try {
    const task = await Task.findById(taskId)
    if (!task) throw new Error()
    res.status(200).json(task)
  } catch (err) {
    res.status(404).json({ message: 'not found' })
  }
}

// Create Route create a task 

async function tasksCreate(req, res) {
  try {
    // console.log(JSON.stringify(req.body))
    const createdTask = await Task.create(req.body)
    if (!createdTask) throw new Error()
    res.status(201).json(createdTask)
  } catch (err) {
    res.status(422).json({ err, message: 'Oops something went wrong' })
  }
}
 
// UPDATE ROUTE
async function updateOne(req, res) {
  const taskId = req.params.id
  try {
    const taskUpdate = await Task.findByIdAndUpdate(
      taskId, req.body, { new: true, runValidators: true })
    if (!taskUpdate) throw new Error()
    res.status(202).json(taskUpdate)
  } catch (err) {
    res.status(422).json({ err ,message: 'record not found' })
  }
}

// DELETE ROUTE

async function tasksDelete(req, res) {
  const taskToDelete = req.params.id
  try {
    await Task.findByIdAndDelete(taskToDelete)
    res.sendStatus(204).json({ message: 'Deleted Success' })
  } catch (err) {
    res.json(err)
  }
}

module.exports = {
  index: indexRoute,
  show: tasksShow,
  create: tasksCreate,
  update: updateOne,
  delete: tasksDelete
}