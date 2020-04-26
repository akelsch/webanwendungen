import { mapData } from './map-data.js'
import { createSVGElement, normalize, determineMinMaxCoordinates } from './common.js'

// DOM
const svg = document.querySelector('#map')

// Data
const countyGeometryMapping = new Map()
mapData.features.forEach(element => {
  countyGeometryMapping.set(element.attributes.county, element.geometry.rings)
})

// Start
drawMap() // TODO options

function drawMap () {
  const minMaxData = determineMinMaxCoordinates(countyGeometryMapping)
  for (const rings of countyGeometryMapping.values()) {
    rings.forEach(ring => {
      let pathData = 'M '
      ring.forEach(([x, y]) => {
        pathData += `${normalize(x, minMaxData.minX, minMaxData.maxX) * 100},${normalize(y, minMaxData.minY, minMaxData.maxY) * 100} `
      })
      pathData += 'Z'

      const path = createSVGElement('path', {
        fill: 'none', // TODO hsl
        stroke: 'black', // TODO als Option
        'stroke-width': 0.1,
        d: pathData
      })
      svg.appendChild(path)
    })
  }
}
