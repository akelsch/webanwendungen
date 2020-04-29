import { mapData } from './map-data.js'
import { createSVGElement, normalize, createTable, appendRowToTable } from './common.js'
import PopupData from './model/PopupData.js'

// DOM
const svg = document.querySelector('#map')

// Data
const data = new Map()
mapData.features.forEach(element => {
  data.set(new PopupData(element.attributes), element.geometry.rings)
})

// Start
drawMap() // TODO options

function drawMap () {
  const minMaxData = determineMinMaxCoordinates(data.values())
  for (const [popupData, rings] of data) {
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

function determineMinMaxCoordinates (data) {
  let minX = Infinity
  let minY = Infinity
  let maxX = 0
  let maxY = 0
  for (const rings of data) {
    rings.forEach(ring => {
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
  }
  return {
    minX, maxX, minY, maxY
  }
}

function displayPopup (popupData) {
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
  appendRowToTable(dataTable, 'Kreis', popupData.county)
  appendRowToTable(dataTable, 'Bundesland', popupData.bl)
  appendRowToTable(dataTable, 'Einwohnerzahl', popupData.ewz)
  appendRowToTable(dataTable, 'Fälle', popupData.cases)
  appendRowToTable(dataTable, 'Fälle/100T Einwohner', popupData.cases_per_100k.toFixed(1))
  appendRowToTable(dataTable, 'In den letzten 7 Tagen', popupData.cases7_per_100k.toFixed(1))
  appendRowToTable(dataTable, 'Todesfälle', popupData.deaths)

  popupDiv.appendChild(closePopupButton)
  popupDiv.appendChild(dataTable)

  svg.parentNode.insertBefore(popupDiv, svg)
}
