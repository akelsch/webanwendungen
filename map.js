import { mapData } from './map-data.js'
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