import { mapData } from './map-data.js'
import { createSVGElement } from './common.js'

const map = document.getElementById('map')

const coordinates = mapData.features.map(elem => elem.geometry.rings)

// slice -> nur erster Kreis
coordinates.slice(0, 1).forEach(county => {
  let pathData = 'M '
  // nur erster ring
  county[0].forEach(([x, y]) => {
    pathData += `${Math.trunc(x * 1000)},${Math.trunc(y * 1000)} `
  })
  pathData += 'Z'

  const path = createSVGElement('path', {
    fill: 'none',
    stroke: 'black',
    'stroke-width': 0.1,
    d: pathData
  })
  map.appendChild(path)
})
