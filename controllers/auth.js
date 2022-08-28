import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'
// const secret = 'our littel secret'

export const allUsers = async (_req, res, next) => {
  try {
    await User
      .find()
      .exec()
      .then(tasks => res.json(tasks))
      .catch(next)
  } catch (err) {
    console.log(err)
  }
}

export const registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    console.log(newUser)
    return res.status(200).json( { message: `Welcome ${ newUser.username }` } )
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  } 
}

export const loginUser = async (req, res) => {
  try {
    const userToLogin = await User.findOne({ email: req.body.email })
    if (!userToLogin || !userToLogin.validatePassword(req.body.password)) {
      throw new Error()
    }
    const token = jwt.sign( { sub: userToLogin._id }, secret, { expiresIn: '7 days' })
    return res.status(202).json( { message: `Welcome back ${ userToLogin.username }`, token })
  } catch (err) {
    return res.status(422).json({ message: 'unauthorised' })
  }
}





