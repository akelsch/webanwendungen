import { mapData } from './map-data.js'
import { createSVGElement, normalize, createTable, appendRowToTable } from './common.js'

// DOM
const svg = document.querySelector('#map')

// Data
const countyData = mapData.features

// Start
drawMap({})

function drawMap ({ stroke = 'black', hue = '240' }) {
  const minMaxData = determineMinMaxCoordinates()
  countyData.forEach(elem => {
    elem.geometry.rings.forEach(ring => {
      let pathData = 'M '
      ring.forEach(([x, y]) => {
        pathData += `${normalize(x, minMaxData.minX, minMaxData.maxX) * 100},${normalize(y, minMaxData.minY, minMaxData.maxY) * 100} `
      })
      pathData += 'Z'

      const path = createSVGElement('path', {
        fill: `hsl(${hue}, 100%, 50%)`, // TODO letzter Wert muss dynamisch berechnet werden von 50-100
        stroke: stroke,
        'stroke-width': 0.1,
        d: pathData
      })

      path.onclick = () => displayPopup(elem.attributes)
      svg.appendChild(path)
    })
  })
}

function determineMinMaxCoordinates () {
  let minX = Infinity
  let minY = Infinity
  let maxX = 0
  let maxY = 0
  countyData.forEach(elem => {
    elem.geometry.rings.forEach(ring => {
      ring.forEach(([x, y]) => {
        if (minX > x) {
          minX = x
        } else if (maxX < x) {
          maxX = x
        }

        if (minY > y) {
          minY = y
        } else if (maxY < y) {
          maxY = y
        }
      })
    })
  })
  return {
    minX, maxX, minY, maxY
  }
}

function displayPopup (attributes) {
  const popupDom = document.querySelector('#popup')
  if (popupDom) {
    popupDom.remove()
  }

  const popupDiv = document.createElement('div')
  popupDiv.id = 'popup'

  const closePopupButton = document.createElement('button')
  closePopupButton.textContent = 'x'
  closePopupButton.onclick = () => popupDiv.remove()

  const dataTable = createTable()
  appendRowToTable(dataTable, 'Kreis', attributes.county)
  appendRowToTable(dataTable, 'Bundesland', attributes.BL)
  appendRowToTable(dataTable, 'Einwohnerzahl', attributes.EWZ)
  appendRowToTable(dataTable, 'Fälle', attributes.cases)
  appendRowToTable(dataTable, 'Fälle/100T Einwohner', attributes.cases_per_100k.toFixed(1))
  appendRowToTable(dataTable, 'In den letzten 7 Tagen', attributes.cases7_per_100k.toFixed(1))
  appendRowToTable(dataTable, 'Todesfälle', attributes.deaths)

  popupDiv.appendChild(closePopupButton)
  popupDiv.appendChild(dataTable)

  svg.parentNode.insertBefore(popupDiv, svg)
}
