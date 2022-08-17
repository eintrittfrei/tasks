const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  task: { type: String, maxlength: 300 },
  completed: { type: Boolean }
}, 
{ 
  timestamps: true 
})

module.exports = mongoose.model('Task', taskSchema)