import { mapData } from './map-data.js'
import { createSVGElement, normalize, findMinMaxForXandYCoordinationPoints } from './common.js'

const svg = document.querySelector('#map')

const countyGeometryMapping = new Map()
mapData.features.forEach(element => {
  countyGeometryMapping.set(element.attributes.county, element.geometry.rings)
})


function renderCounties() {
  const minMaxInformation = findMinMaxForXandYCoordinationPoints(countyGeometryMapping)
  for (const rings of countyGeometryMapping.values()) {
    rings.forEach(ring => {
      let pathData = 'M '
      ring.forEach(([x, y]) => {
        pathData += `${normalize(x, minMaxInformation.minX, minMaxInformation.maxX) * 100},${normalize(y, minMaxInformation.minY, minMaxInformation.maxY) * 100} `
      })
      pathData += 'Z'

      const path = createSVGElement('path', {
        fill: 'none', // TODO hsl
        stroke: 'black',
        'stroke-width': 0.1,
        d: pathData
      })
      svg.appendChild(path)
    })
  }
}

renderCounties()
