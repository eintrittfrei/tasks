import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
  name: { type: String, maxlength: 300, minlength: 2, required: true }
})

categorySchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'category'
})

export default mongoose.model('Category', categorySchema)