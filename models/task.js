import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  task: { type: String, maxlength: 300, required: true },
  completed: { type: Boolean, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  category: { type: mongoose.Schema.ObjectId, ref: 'Category', required: true }
},
{
  timestamps: true
})

export default mongoose.model('Task', taskSchema)