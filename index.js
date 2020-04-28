const express = require('express')

const app = express()

const port = process.env.PORT || 8081

app.get('/', (req, res) => {
  res.send('<h3>Dockerizing nodejs application.</h3>This application has no contents.')
})

app.listen(port, () => {
  console.log('server is running on port:', port)
})