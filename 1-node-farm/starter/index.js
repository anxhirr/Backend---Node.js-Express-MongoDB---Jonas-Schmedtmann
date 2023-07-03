const http = require('http')
const url = require('url')
const fs = require('fs')

///////////////////
// SERVER

const devData = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const devDataObj = JSON.parse(devData)

const server = http.createServer((req, res) => {
  console.log(req.url)

  const pathName = req.url

  if (pathName === '/' || pathName === '/overview') {
    res.end('this is overview')
  } else if (pathName === '/product') {
    res.end('this is product')
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' })
    res.end(devData)
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-header': 'hello-word',
    })
    res.end('Page not found')
  }
})

server.listen(8000, '127.0.0.1', () => {
  console.log('listening')
})
