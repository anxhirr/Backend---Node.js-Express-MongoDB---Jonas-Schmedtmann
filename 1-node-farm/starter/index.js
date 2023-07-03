const http = require('http')
const url = require('url')

///////////////////
// SERVER

const server = http.createServer((req, res) => {
  console.log(req.url)

  const pathName = req.url

  if (pathName === '/' || pathName === '/overview') {
    res.end('this is overview')
  } else if (pathName === '/product') {
    res.end('this is product')
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
