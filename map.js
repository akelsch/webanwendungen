import { mapData } from './map-data.js'
import { createSVGElement, normalize, determineMinMaxCoordinates } from './common.js'
import PopUpData from './model/popUpData.js'
// DOM
const svg = document.querySelector('#map')

// Data
const countyGeometryMapping = new Map()
mapData.features.forEach(element => {
  const countyData = element.attributes
  countyGeometryMapping.set(new PopUpData(countyData.county,
    countyData.BL,
    countyData.EWZ,
    countyData.cases,
    countyData.cases_per_100k,
    countyData.cases7_per_100k,
    countyData.deaths), element.geometry.rings)
})

// Start
drawMap() // TODO options

function drawMap () {
  const minMaxData = determineMinMaxCoordinates(countyGeometryMapping)
  for (const [popUpData,rings] of countyGeometryMapping) {
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
      // create tooltip element
      const ttBox = document.createElement("div");
      // set style
      
      path.addEventListener('mouseover', () => console.log(popUpData.county))
      path.addEventListener('click', () =>{showPopUpWindow(path,popUpData)})
      svg.appendChild(path)
    })
  }
}

function showPopUpWindow(path,popUpData){
  const divPopUpWindow = document.createElement('div')
  const closePopUpWindowButton = document.createElement('button')
  divPopUpWindow.innerText = `Bezirk = ${popUpData.county}
                              Bundesland = ${popUpData.bl}
                              Einwohnerzahl = ${popUpData.numberOfResidents}
                              Anzahl aller Infizierten = ${popUpData.allInfects} 
                              Anzahl der Infizierten pro 100.000 Einwohner = ${popUpData.infectsBy100kInhabitant}
                              Anzahl der Infizierten pro 100.000 Einwohner der letzten 7 Tage = ${popUpData.infectsBy100kInhabitantLast7Days}
                              Anzahl der Toten = ${popUpData.deads}`
  divPopUpWindow.appendChild(closePopUpWindowButton)
                              
}