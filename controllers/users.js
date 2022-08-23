import User from '../models/user.js'

async function registerUser(req, res, next) {
  try {
    const newUser = await User.create(req.body)
    return res.status(200).json( { message: `Welcome ${ newUser.username }`} )
  } catch (err) {
    next(err)
    console.log(err)
  }
}

export default {
  registerUser
}