import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'
import User from '../models/user.js'

export const secureRoute = async (req, res, next) => {

  try {
    // check token in header
    if (!req.headers.authorization) throw new Error('missing headers')
    // remove unwanted characters from auth header 
    const token = req.headers.authorization.replace('Bearer ', '')
    console.log('token ==>',token)
    // varfy with token
    // payload extracted from token:
    const payload = jwt.verify(token, secret)
    console.log('payload ==>', payload)
    // payload access to the user id
    // find user based on id in payload 
    const userToVerify = User.findById(payload.sub)
    if (!userToVerify) throw new Error({ message: 'User not found 😱' })
    next()
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'unauthorised', detail: err.message })
  }
}