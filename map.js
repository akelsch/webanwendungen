import { mapData } from './map-data.js'
import { createSVGElement, normalize, createTable } from './common.js'

// DOM
const option = document.querySelector('#option')
option.addEventListener('change', event => drawMap(getOptions(event.target.value)))
const popup = document.querySelector('#popup')
const svg = document.querySelector('#map')

// Data
const countyData = mapData.features

// Start
drawMap({ })

function drawMap ({ stroke = 'black', hue = '240', minMaxSource = 'cases_per_100k' }) {
  svg.innerHTML = ''

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
      path.onmouseleave = () => { popup.style.display = 'none' }

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
  popup.innerHTML = ''
  popup.style.display = null
  popup.style.left = `${event.clientX}px`
  popup.style.top = `${event.clientY}px`

  const table = createTable({
    Kreis: attributes.county,
    Bundesland: attributes.BL,
    Einwohnerzahl: attributes.EWZ,
    Fälle: attributes.cases,
    'Fälle/100T Einwohner': attributes.cases_per_100k.toFixed(1),
    'In den letzten 7 Tagen': attributes.cases7_per_100k.toFixed(1),
    Todesfälle: attributes.deaths
  })
  popup.appendChild(table)
}

function getOptions (selection) {
  switch (selection) {
    case 'red':
      return { stroke: 'blue', hue: '0', minMaxSource: 'cases_per_100k' }
    case 'yellow':
      return { stroke: 'red', hue: '60', minMaxSource: 'cases7_per_100k' }
    case 'green':
      return { stroke: 'brown', hue: '120', minMaxSource: 'cases_per_100k' }
    case 'blue':
      return { stroke: 'orange', hue: '240', minMaxSource: 'cases7_per_100k' }
    default:
      return { }
  }
}
