import { mapData } from './map-data.js'
<<<<<<< HEAD
import {createSVGElement} from './common.js'
const countyByRings = new Map()
const svg = document.querySelector('#bar-chart')


const fillMap = () => {
  mapData.features.forEach(element => {
    countyByRings.set(element.attributes.county, element.geometry.rings)
  });
}

fillMap()

const createCountyOutline = () => {
  let attr = 'M '
  let values = countyByRings.get('SK Flensburg')
  values[0].forEach(([x,y]) => attr+= `${x},${y} L `)
  attr+='Z'
  const path = createSVGElement('path',{d:attr ,stroke : 'pink' })
  svg.appendChild(path)
}
createCountyOutline()
=======
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
>>>>>>> 93af41befe91d90063da3559330f58b58b5a0e04
