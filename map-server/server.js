// @ts-check
import * as fs from 'fs'
import * as http from 'http'
import * as path from 'path'
import * as querystring from 'querystring'
import { mapData } from './map-data.js'
import { douglasPeucker, webMercator } from './algorithms.js'

const viewBoxWidth = 1000
const viewBoxHeight = 1000

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
  const filteredData = mapData.features.filter(elem => elem.attributes.BL_ID === stateId)
    .flatMap(elem => elem.geometry.rings)
    .map(ring => ring.map(([long, lat]) => webMercator(long, lat, zoom)))

  const { minX, maxX, minY, maxY } = determineMinMaxCoordinates(filteredData)
  const normalizedData = filteredData.map(ring => ring.map(([x, y]) => {
    const xNorm = normalize(x, minX, maxX) * viewBoxWidth
    const yNorm = normalize(y, minY, maxY) * viewBoxHeight
    return [xNorm.toFixed(), yNorm.toFixed()]
  }))

  // filteredData = applyResolution(geodata, resolution)

  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(normalizedData))
}

function determineMinMaxCoordinates (geodata) {
  return geodata.reduce((acc, ring) => {
    // Effizienter als das Array erst zu flatten
    ring.forEach(([x, y]) => {
      if (x < acc.minX) {
        acc.minX = x
      }
      if (x > acc.maxX) {
        acc.maxX = x
      }
      if (y < acc.minY) {
        acc.minY = y
      }
      if (y > acc.maxY) {
        acc.maxY = y
      }
    })
    return acc
  }, { minX: Infinity, maxX: 0, minY: Infinity, maxY: 0 })
}

function normalize (x, min, max) {
  return (x - min) / (max - min)
}

function applyResolution (geodata, resolution) {
  switch (resolution) {
    case 'high':
      return geodata
    case 'medium':
      return douglasPeucker(geodata, 1)
    case 'low':
      return douglasPeucker(geodata, 2)
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
