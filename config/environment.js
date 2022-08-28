import dotenv from 'dotenv'
dotenv.config()

export const port = process.env.PORT || 8000
export const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todolist'
export const secret = process.env.SECRET
