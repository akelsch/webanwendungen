import { mapData } from './map-data.js'
import { createSVGElement, normalize, createTable, appendRowToTable } from './common.js'

// DOM
const svg = document.querySelector('#map')
const options = document.querySelector('#option')
options.addEventListener('change', event => {
  drawMap(getOptions(event.target.value))
})

// Data
const countyData = mapData.features

// Start
drawMap({ })

function drawMap ({ stroke = 'black', hue = '240', minMaxSource = 'cases_per_100k', hoverStroke = 'red' }) {
  console.log(stroke)
  const minMaxData = determineMinMaxData(minMaxSource)
  countyData.forEach(elem => {
    elem.geometry.rings.forEach(ring => {
      let pathData = 'M '
      ring.forEach(([x, y]) => {
        pathData += `${normalize(x, minMaxData.minX, minMaxData.maxX) * 100},${normalize(y, minMaxData.minY, minMaxData.maxY) * 100} `
      })
      pathData += 'Z'

      const lightness = 100 - normalize(elem.attributes[minMaxSource], minMaxData.minCases, minMaxData.maxCases) * 50
      const path = createSVGElement('path', {
        fill: `hsl(${hue}, 100%, ${lightness}%)`,
        stroke: stroke,
        'stroke-width': 0.1,
        d: pathData
      })
      path.onclick = (event) => displayPopup(event, elem.attributes)
      path.onmouseover = () => {
        path.setAttribute('stroke', hoverStroke)
        path.setAttribute('stroke-width', 0.2)
      }
      path.onmouseleave = () => {
        clearPopup()
        path.setAttribute('stroke', stroke)
        path.setAttribute('stroke-width', 0.1)
      }

      const title = createSVGElement('title')
      title.textContent = elem.attributes.county
      path.appendChild(title)

      svg.appendChild(path)
    })
  })
}

function determineMinMaxData (minMaxSource) {
  let minX = Infinity
  let minY = Infinity
  let minCases = Infinity
  let maxX = 0
  let maxY = 0
  let maxCases = 0
  countyData.forEach(elem => {
    const cases = elem.attributes[minMaxSource]
    if (minCases > cases) {
      minCases = cases
    } else if (maxCases < cases) {
      maxCases = cases
    }

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
    minX, maxX, minY, maxY, minCases, maxCases
  }
}

function displayPopup (event, attributes) {
  clearPopup()

  const popupDiv = document.createElement('div')
  popupDiv.id = 'popup'
  popupDiv.style.left = `${event.clientX}px`
  popupDiv.style.top = `${event.clientY}px`

  const dataTable = createTable()
  appendRowToTable(dataTable, 'Kreis', attributes.county)
  appendRowToTable(dataTable, 'Bundesland', attributes.BL)
  appendRowToTable(dataTable, 'Einwohnerzahl', attributes.EWZ)
  appendRowToTable(dataTable, 'Fälle', attributes.cases)
  appendRowToTable(dataTable, 'Fälle/100T Einwohner', attributes.cases_per_100k.toFixed(1))
  appendRowToTable(dataTable, 'In den letzten 7 Tagen', attributes.cases7_per_100k.toFixed(1))
  appendRowToTable(dataTable, 'Todesfälle', attributes.deaths)
  popupDiv.appendChild(dataTable)

  svg.parentNode.insertBefore(popupDiv, svg)
}

function clearPopup () {
  const popup = document.querySelector('#popup')
  if (popup) {
    popup.remove()
  }
}

function getOptions (choice) {
  switch (choice) {
    case 'red':
      return { stroke: 'black', hue: '1', minMaxSource: 'cases_per_100k', hoverStroke: 'green' }
    case 'yellow':
      return { stroke: 'green', hue: '61', minMaxSource: 'cases7_per_100k', hoverStroke: 'orange' }
    case 'purple':
      return { stroke: 'blue', hue: '283', minMaxSource: 'cases_per_100k', hoverStroke: 'yellow' }
    case 'green':
      return { stroke: 'red', hue: '123', minMaxSource: 'cases7_per_100k', hoverStroke: 'blue' }
    default:
      return { stroke: 'black', hue: '240', minMaxSource: 'cases_per_100k', hoverStroke: 'red' }
  }
}
