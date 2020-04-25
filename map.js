import { mapData } from './map-data.js'
import { createSVGElement, normalize } from './common.js'

const svg = document.querySelector('#map')

const countyGeometryMapping = new Map()

function initalizeMapping () {
  mapData.features.forEach(element => {
    countyGeometryMapping.set(element.attributes.county, element.geometry.rings)
  })
}

function renderCounties () {
  for (const [_, rings] of countyGeometryMapping) {
    rings.forEach(ring => {
      let pathData = 'M '
      ring.forEach(([x, y]) => {
        pathData += `${minMax(x, 'X') * 100},${minMax(y, 'Y') * 100} `
      })
      pathData += 'Z'

      const path = createSVGElement('path', {
        fill: 'red',
        stroke: 'pink',
        d: pathData
      })
      path.setAttribute('stroke-width',0.1)
      svg.appendChild(path)
    })
  }
}

function minMax (value, XY) {
  let min; let max = 0
  // The values for Germany
  if (XY === 'X') {
    min = 5.8
    max = 15.1
  } else if (XY === 'Y') {
    min = 47.2
    max = 55.1
  }
  return ((value - min) / (max - min))
}

initalizeMapping()
renderCounties()
