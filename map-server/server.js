// @ts-check
import * as fs from 'fs'
import * as http from 'http'
import * as path from 'path'
import * as querystring from 'querystring'
import { mapData } from './map-data.js'
import { douglasPeucker, webMercator } from './algorithms.js'

const hostname = '127.0.0.1'
const port = 3000

let rootDir

if (process.argv.length === 2) {
  rootDir = 'public'
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

  const url = request.url === '/' ? '/index.html' : request.url
  if (url.startsWith('/mapdata')) {
    const queryParams = querystring.parse(url.split('?')[1])
    serveGeodata(response, queryParams)
  } else {
    const filePath = path.join(rootDir, url)
    serveFile(response, filePath)
  }
}

function serveGeodata (response, queryParams) {
  const { BL_ID: stateId, resolution, zoom } = queryParams

  const geodata = mapData.features.filter(elem => elem.attributes.BL_ID === stateId)
    .flatMap(elem => elem.geometry.rings)
    .map(ring => ring.map(([long, lat]) => webMercator(long, lat, zoom)))
    .map(ring => applyResolution(ring, resolution))

  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(geodata))
}

function applyResolution (ring, resolution) {
  switch (resolution) {
    case 'high':
    default:
      return ring
    case 'medium':
      return douglasPeucker(ring, 1)
    case 'low':
      return douglasPeucker(ring, 2)
  }
}

function serveFile (response, filePath) {
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
