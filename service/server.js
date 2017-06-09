const express = require('express')

const app = express()

app.get('/the-answer', (req, res) => {
  res.json({ answer: 42, task: process.env.MESOS_TASK_ID})
})

app.get('/', (req, res) => res.send('OK'))


const server = app.listen(process.env.PORT || 3001, (err) => {
  if (err) throw err

  console.log(`Listening on ${server.address().port}...`)
})
