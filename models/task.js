import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  task: { type: String, maxlength: 300, required: true },
  completed: { type: Boolean, required: true }
},
{
  timestamps: true
})

export default mongoose.model('Task', taskSchema)