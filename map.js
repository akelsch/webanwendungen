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
  for (const [popupData, rings] of countyGeometryMapping) {
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

      path.onclick = () => displayPopup(popupData)
      svg.appendChild(path)
    })
  }
}

function displayPopup (popupData) {
  // TODO create new function for creating a new HTML element like the function createSVGElement
  // const test = document.querySelector('.popup') === null
  // if (!test) {
  //   document.body.removeChild(document.querySelector('.popup'))
  // }

  const popupDiv = document.createElement('div')
  popupDiv.setAttribute('class', 'popup')
  popupDiv.innerText = `Bezirk = ${popupData.county}
                        Bundesland = ${popupData.bl}
                        Einwohnerzahl = ${popupData.numberOfResidents}
                        Anzahl aller Infizierten = ${popupData.allInfects}
                        Anzahl der Infizierten pro 100.000 Einwohner = ${popupData.infectsBy100kInhabitant.toFixed(2)}
                        Anzahl der Infizierten pro 100.000 Einwohner der letzten 7 Tage = ${popupData.infectsBy100kInhabitantLast7Days.toFixed(2)}
                        Anzahl der Toten = ${popupData.deads}`

  const closePopupButton = document.createElement('button')
  closePopupButton.textContent = 'x'
  closePopupButton.onclick = () => popupDiv.remove()
  popupDiv.appendChild(closePopupButton)

  svg.parentNode.insertBefore(popupDiv, svg)
}
