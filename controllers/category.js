import Category from '../models/category.js'



export const categoryIndex = async (_req, res, next) => {
  try {
    const category = await Category.find()
    return res.status(200).json(category)
  } catch (err) {
    next(err)
  }
}


