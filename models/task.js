import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true,  maxlength: 300  },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const taskSchema = new mongoose.Schema({
  task: { type: String, maxlength: 300, required: true },
  completed: { type: Boolean, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  category: { type: String, required: false, maxlength: 200 },
  comments: [commentSchema]
},
{
  timestamps: true
})

export default mongoose.model('Task', taskSchema)