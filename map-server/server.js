// @ts-check
import * as fs from 'fs'
import * as http from 'http'
import * as path from 'path'
import * as querystring from 'querystring'

const hostname = '127.0.0.1'
const port = 3000

let rootDir

if (process.argv.length === 2) {
  rootDir = '.'
} else if (process.argv.length === 3) {
  rootDir = process.argv[2]
} else {
  const filename = path.parse(process.argv[1]).base
  console.log(`Usage: node ${filename} [directory]`)
  process.exit(2)
}

http.createServer(handleRequest).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

function handleRequest (request, response) {
  // Allow GET only
  if (request.method !== 'GET') {
    response.statusCode = 405
    response.setHeader('Content-Type', 'text/plain')
    response.end(http.STATUS_CODES[response.statusCode])
    return
  }

  if (request.url.startsWith('/mapdata')) {
    // TODO
    console.log(querystring.parse(request.url.split('?')[1]))
  } else {
    const url = request.url === '/' ? 'index.html' : request.url
    const filePath = path.join(rootDir, url)
    serveFile(filePath, response)
  }
}

function serveFile (filePath, response) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.statusCode = err.code === 'ENOENT' ? 404 : 500
      response.setHeader('Content-Type', 'text/plain')
      response.end(`${http.STATUS_CODES[response.statusCode]} => ${err.message}`)
    } else {
      response.setHeader('Content-Type', getContentType(filePath))
      response.end(data)
    }
  })
}

function getContentType (filePath) {
  let contentType
  switch (path.extname(filePath)) {
    case '.html':
      contentType = 'text/html'
      break
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/plain'
  }
  return contentType
}
