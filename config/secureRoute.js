const jwt = require('jsonwebtoken')
const secret = process.env.SECRET 
const User = require('../models/user')

async function secureRoute(req, res, next) {
  try {
    if (!req.headers.authorization) {
      throw new Error('Missing Required Header')
    } 

    const token = req.headers.authorization.replace('Bearer', '')
    const payload = jwt.verify(token, secret)
    const userToVerify = await User.findById(payload.sub)

    if (!userToVerify) {
      throw new Error('User not found')
    }

    next()
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorised', detail: err.message })
  }

}