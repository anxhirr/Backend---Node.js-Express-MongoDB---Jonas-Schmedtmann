const http = require('http')

///////////////////
// SERVER

const server = http.createServer((req, res) => {
  res.end('Hello from my server')
})

server.listen(8000, '127.0.0.1', () => {
  console.log('listening')
})
