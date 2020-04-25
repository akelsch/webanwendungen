import { mapData } from './map-data.js'
import { createSVGElement, normalize } from './common.js'
const countyByRings = new Map()
const svg = document.querySelector('#map')
console.log(svg)


const fillMap = () => {
  mapData.features.forEach(element => {
    countyByRings.set(element.attributes.county, element.geometry.rings)
  });
}

fillMap()

function minMax(value, XY) {
  let min, max = 0;
  //The values for Germany    
  if (XY === "X") {
    min = 5.8;
    max = 15.1;
  }
  else if (XY === "Y") {
    min = 47.2;
    max = 55.1;
  }
  return ((value - min) / (max - min));
}


const createCountyOutline = () => {
  let attr = 'M '

  for (let [key, value] of countyByRings) {
    value.forEach(v => {
      v.forEach(point => {
        attr += `${minMax(point[0],'X') * 100},${minMax(point[1],'Y') * 100} L`
      })
      attr += 'Z'
      const path = createSVGElement('path', { d: attr, stroke: 'pink', fill: 'red' })
      svg.appendChild(path)
      attr = 'M '
    })
  }
  //let values = countyByRings.get('SK Flensburg')
  //values.forEach(point => attr+= `${point[0]},${point[1]} L `)
  //attr+='Z'
  //const path = createSVGElement('path',{d:attr ,stroke : 'pink' })
  //svg.appendChild(path)
}

createCountyOutline()

