const express = require('express')
const path = require('path')
const fetch = require('node-fetch')

const app = express()

app.use((req, res, next) => {
  res.set('X-TASK-ID', process.env.MESOS_TASK_ID)
  next()
})

app.get('/life-the-universe', async (req, res) => {
  const serviceProxy = process.env.SERVICE_PROXY_PREFIX || "http://localhost:3001"

  const response = await fetch(`${serviceProxy}/the-answer`, {
    headers: { "X-Marathon-App-Id": "/service"}
  })

  if (!response.ok) {
    return res.sendStatus(500)
  }
  else {
    const answer = await response.json()

    res.json(answer)
  }
})

app.use('/', express.static(path.join(__dirname, 'public')))

const server = app.listen(process.env.PORT || 3000, (err) => {
  if (err) throw err;

  console.log(`Listening on ${server.address().port}...`)
})