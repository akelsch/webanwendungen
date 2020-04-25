import { mapData } from './map-data.js'
import { createSVGElement } from './common.js'

const map = document.getElementById('map')

const coordinates = mapData.features.map(elem => elem.geometry.rings)

// Funktioniert noch nicht :(
let pathCommands = 'M '

// Erster Kreis und davon der erste Ring (SK Flensburg)
coordinates[0][0].forEach(([x, y]) => {
  pathCommands += `${x},${y} `
})

pathCommands += 'Z'

const path = createSVGElement('path', {
  stroke: 'black',
  'stroke-width': 0.01,
  d: pathCommands
})

map.appendChild(path)
