const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = Number(process.env.PORT) || 4001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
  if (req.path === '/favicon.ico') return next()

  res.setHeader('Content-Type', 'text/plain')
  switch (req.method) {
    case 'GET':
    case 'HEAD':
      console.log(req.method, req.query)
      res.end(JSON.stringify(req.query, null, 2))
      break
    case 'POST':
      console.log(req.method, req.body)
      res.end(JSON.stringify(req.body, null, 2))
      break
  }
})

// prevent the app from starting up durings tests
if (!module.parent) {
  // workaround for https://github.com/expressjs/express/issues/1101
  const server = require('http').createServer(app)
  server.listen(port, () => console.log(`app running on http://localhost:${port}`))
    .on('error', () => server.close())
}

module.exports = app
