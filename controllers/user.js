import User from '../models/user.js'

export const oneUser = async (req, res) => {
  try {
    console.log(req.currentUser)
    const userFound = await User.findById(req.currentUser._id)
    if (!userFound) throw new Error({ message: 'User not found' })
    res.status(200).json(userFound)
  } catch (err) {
    res.status(404).json({ message: 'Not found' })
  }
} 