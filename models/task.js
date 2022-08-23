const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  task: { type: String, maxlength: 300, required: true },
  completed: { type: Boolean, required: true }
},
{
  timestamps: true
})

module.exports = mongoose.model('Task', taskSchema)