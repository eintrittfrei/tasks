// import task from '../models/task.js'
import Task from '../models/task.js'

export const indexRoute = async (_req, res) => {
  try {
    const tasks = await Task.find().populate('owner').populate('category')
    return res.status(200).json(tasks)
  } catch (err) {
    console.log(err)
  }
}

//SHOW ROUTE
export const tasksShow = async (req, res) => {
  const { id } = req.params.id
  console.log(req.params.id)
  try {
    const task = await Task.findById(id).populate('owner').populate('category')
    console.log(`Task: ${task}`)
    res.status(200).json(task)
  } catch (err) {
    res.status(404).json({ message: 'not found' })
  }
}

// Create

export const tasksCreate = async (req, res) => {
  try {
    const taskWithOwner = { ...req.body, owner: req.currentUser._id }
    const createdTask = await Task.create(taskWithOwner)
    if (!createdTask) throw new Error()
    res.status(201).json(createdTask)
  } catch (err) {
    res.status(422).json({ message: 'Oops something went wrong' })
  }
}
 
// UPDATE
export const updateOne = async (req, res) => {
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

// DELETE

export const tasksDelete = async (req, res) =>  {
  try {
    const { id } = req.params
    const taskToDelete = await Task.findById(id)
    if (!taskToDelete) throw new Error()  
    if (!taskToDelete.owner.equals(req.currentUser._id)) throw new Error('unauthorized')
    await taskToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    return res.status(404).json({ message: 'Task not found!' })
  }
}