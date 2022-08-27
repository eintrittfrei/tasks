const User = require('../models/user.js')

// const token = jwt.sign(payload, secret, options)
async function indexRoute(_req, res, next) {
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


async function registerUser(req, res) {
  try {
    const newUser = await User.create(req.body)
    console.log(newUser)
    return res.status(200).json( { message: `Welcome ${ newUser.username }` } )
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  } 
}

// async function loginUser(req, res, next) {
//   try {
//     const userToLogin = await User.findOne({ email: req.body.email })
//     if (!userToLogin || !userToLogin.validatePassword(req.body.password)) {
//       throw new Error( { message: 'unauthorised' } )
//     }
//     const token = jwt.sign( { sub: userToLogin._id }, secret, { expiresIn: '7 days' })
//     return res.status(202).json( { message: `Welcome back ${ userToLogin.username }`, token })
//   } catch (err) {
//     next(err)
//   }
// }


module.exports = {
  index: indexRoute,
  create: registerUser
}





