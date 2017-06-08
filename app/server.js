const express = require('express')
const path = require('path')

const app = express()

app.use('/', express.static(path.join(__dirname, 'public')))


const server = app.listen(process.env.PORT || 3000, (err) => {
  if (err) throw err;

  console.log(`Listening on ${server.address().port}...`)
})