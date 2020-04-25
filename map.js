import { mapData } from './map-data.js'
import { createSVGElement, normalize } from './common.js'

const svg = document.querySelector('#map')

const countyGeometryMapping = new Map()
mapData.features.forEach(element => {
  countyGeometryMapping.set(element.attributes.county, element.geometry.rings)
})

function renderCounties () {
  for (const rings of countyGeometryMapping.values()) {
    rings.forEach(ring => {
      let pathData = 'M '
      ring.forEach(([x, y]) => {
        // TODO magic numbers programmatisch bestimmen
        pathData += `${normalize(x, 5.8, 15.1) * 100},${normalize(y, 47.2, 55.1) * 100} `
      })
      pathData += 'Z'

      const path = createSVGElement('path', {
        fill: 'white',
        stroke: 'blue',
        'stroke-width': 0.1,
        d: pathData
      })
      svg.appendChild(path)
    })
  }
}

renderCounties()
