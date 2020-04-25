/* eslint-env browser */
import { mapData } from './map-data.js'
import { createSVGElement, normalize } from './common.js'

const select = document.getElementById('state')
const svg = document.getElementById('bar-chart')

const sortedData = mapData.features.map(elem => elem.attributes)
  .sort((x, y) => y.cases_per_100k - x.cases_per_100k)

const maxCases = sortedData[0].cases_per_100k

function initSelect () {
  const states = new Set()
  sortedData.forEach(county => states.add(county.BL))
  Array.from(states).forEach(state => select.appendChild(new Option(state, state)))
}

function drawBarChart ({ state = 'alle', amount = 5 }) {
  svg.innerHTML = ''
  let casesY = 11
  let countyY = 7
  let barY = 8

  const topN = sortedData.filter(county => county.BL === state || state === 'alle').slice(0, amount)
  topN.forEach(county => {
    const group = createSVGElement('g')
    group.appendChild(createCasesText(casesY, county))
    casesY += 7
    group.appendChild(createCountyText(countyY, county))
    countyY += 7
    group.appendChild(createBarRect(barY, county))
    barY += 7
    svg.appendChild(group)
  })
}

function createCasesText (y, county) {
  const text = createSVGElement('text', {
    x: 9,
    y: y,
    class: 'bar-text',
    'text-anchor': 'end'
  })
  text.textContent = county.cases_per_100k.toFixed(1)
  return text
}

function createCountyText (y, county) {
  const text = createSVGElement('text', {
    x: 11,
    y: y,
    class: 'bar-text',
    'text-anchor': 'start'
  })
  text.textContent = `${county.county} (${county.BL})`
  return text
}

function createBarRect (y, county) {
  const rect = createSVGElement('rect', {
    width: normalize(county.cases_per_100k, 0, maxCases) * 69,
    height: 3,
    x: 10,
    y: y,
    fill: 'lightblue',
    class: 'bar'
  })
  return rect
}

initSelect()
drawBarChart({ state: select.value })
select.onchange = event => drawBarChart({ state: event.target.value })
