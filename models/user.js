import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxLength: 20 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
},
{
  timestamps: true
})

userSchema
  .set('toJSON', {
    virtuals: true,
    transform(_doc, json) {
      delete json.password
      return json
    }
  })

// password confirmation schema
userSchema
  .virtual('passwordConfirmation')
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

// Check password against passoword hash in DB for login etc. 
userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
} 

export default mongoose.model('User', userSchema)