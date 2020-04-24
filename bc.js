/* eslint-env browser */
import { mapData } from './map-data.js'
import { createSVGElement, normalize } from './common.js'

const select = document.getElementById('state')
const svg = document.getElementById('bar-chart')

// Bundesland = state
// Landkreis = county

const counties = mapData.features.map(elem => elem.attributes)
  .sort((x, y) => y.cases_per_100k - x.cases_per_100k)

function fillSelectWithStates () {
  let states = new Set()
  counties.forEach(county => states.add(county.BL))

  states = [...states].sort()
  states.forEach(state => {
    const option = new Option(state, state)
    select.appendChild(option)
  })
}

function updateSvg (selection) {
  svg.innerHTML = ''
  let casesY = 11
  let countyY = 7
  let barY = 8

  const top10 = counties.filter(county => county.BL === selection || selection === 'alle').slice(0, 10)
  const max = top10[0].cases_per_100k
  top10.forEach(county => {
    renderCasesText(casesY, county.cases_per_100k)
    renderCountyText(countyY, county.county, county.BL)
    renderBarRect(barY, county.cases_per_100k, max)
    casesY += 7
    countyY += 7
    barY += 7
  })
}

function renderCasesText (y, cases) {
  const text = createSVGElement('text', {
    x: 9,
    y: y,
    class: 'text',
    'text-anchor': 'end'
  })
  text.textContent = cases.toFixed(1)
  svg.appendChild(text)
}

function renderCountyText (y, county, state) {
  const text = createSVGElement('text', {
    x: 11,
    y: y,
    class: 'text',
    'text-anchor': 'start'
  })
  text.textContent = `${county} (${state})`
  svg.appendChild(text)
}

function renderBarRect (y, cases, max) {
  const rect = createSVGElement('rect', {
    width: normalize(cases, 0, max) * 69,
    height: 3,
    x: 10,
    y: y,
    fill: 'lightblue',
    class: 'bar'
  })
  svg.appendChild(rect)
}

fillSelectWithStates()
updateSvg(select.value)
select.onchange = event => updateSvg(event.target.value)
