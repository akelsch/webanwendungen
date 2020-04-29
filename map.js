import { mapData } from './map-data.js'
import { createSVGElement, normalize, determineMinMaxCoordinates } from './common.js'
import PopupData from './model/PopupData.js'

// DOM
const svg = document.querySelector('#map')

// Data
const countyGeometryMapping = new Map()
mapData.features.forEach(element => {
  countyGeometryMapping.set(new PopupData(element.attributes), element.geometry.rings)
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
  const popupDom = document.querySelector('#popup')
  if (popupDom) {
    popupDom.remove()
  }

  const popupDiv = document.createElement('div')
  popupDiv.id = 'popup'
  popupDiv.innerText = `Bezirk = ${popupData.county}
                        Bundesland = ${popupData.bl}
                        Einwohnerzahl = ${popupData.ewz}
                        Anzahl aller Infizierten = ${popupData.cases}
                        Anzahl der Infizierten pro 100.000 Einwohner = ${popupData.cases_per_100k.toFixed(2)}
                        Anzahl der Infizierten pro 100.000 Einwohner der letzten 7 Tage = ${popupData.cases7_per_100k.toFixed(2)}
                        Anzahl der Toten = ${popupData.deaths}`

  const closePopupButton = document.createElement('button')
  closePopupButton.textContent = 'x'
  closePopupButton.onclick = () => popupDiv.remove()
  popupDiv.appendChild(closePopupButton)

  svg.parentNode.insertBefore(popupDiv, svg)
}
