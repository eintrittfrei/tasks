const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = require('./config/router.js')
const { port, dbURI } = require('./config/environment.js')
main().catch(err => console.log(err))

async function main() {
  await mongoose.connect(dbURI)
  console.log(`💽 Mongoose DB ${ dbURI } connected`)
}
app.use((req, res, next) => {
  console.log(`Incoming request Method ${req.query} URL: ${req.url} response ${res.json}`)
  next()
})
app.use(express.json())
app.use('/api', router)

app.listen(port, () => console.log(`🚀 Express is up and runnung on Port ${port} 🐝`))