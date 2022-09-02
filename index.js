import express from 'express'
import mongoose from 'mongoose'
import router from './config/router.js'
import { port, dbURI } from './config/environment.js'
const app = express()

const startServer = async () => {

  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log(`💽 Mongoose DB ${ dbURI } connected`)

    app.use((req, _res, next) => {
      console.log(`⭐️ Incoming request: METHOD: ${req.method}, URL: ${req.url}`)
      next()
    })

    app.use(express.json())
    app.use('/api', router)

    app.listen(port, () => console.log(`🚀 Express is up and runnung on Port ${port} 🐝`))
  } catch (err) {
    console.log(err, 'Something has gone wrong 🐙')
  }

}

startServer()