const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = require('./config/router.js')
const { port, dbURI } = require('./config/environment.js')
// const { db } = require('./models/task.js')
main().catch(err => console.log(err))

async function main() {
  await mongoose.connect(dbURI)
  console.log(`💽 Mongoose DB ${ dbURI } connected`)
}

app.use('/api', router)

app.listen(port, () => console.log(`🚀 Express is up and runnung on Port ${port} 🐝`))