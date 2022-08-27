const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
// const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxLength: 20 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
},
{
  timestamps: true
})

// password confirmation schema
userSchema
  .virtual('passwordConfirmation') // virtual field for password confirmation so password confirm won;t go in the DB
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

// prevalidation hook
userSchema
  .pre('validate', function(next) {
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'Passwords do not match')
    }
    next()
  })

// pre save 
userSchema
  .pre('save', function(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync( this.password, bcrypt.genSaltSync())
    }
    next()
  })

// Check password against passoword hash in DB
// userSchema.methods.validatePassword = function(password) {
//   return bcrypt.compareSync(password, this.password)
// } 

// userSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User', userSchema)