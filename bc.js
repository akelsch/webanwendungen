/* eslint-env browser */
import { mapData } from './map-data.js'
import { createSVGElement, normalize } from './common.js'

// CSS
const barChartTransitionInMs = 750

// DOM
const option = document.querySelector('#option')
option.addEventListener('change', () => drawBarChart(getOptions()))
const select = document.getElementById('state')
const svg = document.getElementById('bar-chart')

// Data
const sortedData = mapData.features.map(elem => elem.attributes)
  .sort((x, y) => y.cases_per_100k - x.cases_per_100k)

// Start
initSelect()
drawBarChart({ state: select.value })
select.addEventListener('change', () => drawBarChart(getOptions()))

function initSelect () {
  const states = new Set()
  sortedData.forEach(county => states.add(county.BL))
  Array.from(states).sort().forEach(state => select.appendChild(new Option(state, state)))
}

function drawBarChart ({ state = 'alle', amount = 5, fill = 'lightblue', stroke = 'red', strokeWidth = '0.2' }) {
  svg.innerHTML = ''
  let casesY = 11
  let countyY = 7
  let barY = 8
  let position = 0

  const topN = sortedData.filter(county => county.BL === state || state === 'alle').slice(0, amount)
  topN.forEach(county => {
    const group = createSVGElement('g', { opacity: 0 })

    group.appendChild(createCasesText(casesY, county))
    casesY += 7

    group.appendChild(createCountyText(countyY, county))
    countyY += 7

    const bar = createBarRect(barY, county, fill)
    bar.style.width = 0
    group.appendChild(bar)
    barY += 7

    svg.appendChild(group)

    // Referenz: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#JavaScript_examples
    window.setTimeout(() => {
      group.removeAttribute('opacity')
      bar.removeAttribute('style')
      window.dispatchEvent(new CustomEvent('highlight', {
        detail: { county: county.county, stroke: stroke, strokeWidth: strokeWidth }
      }))
    }, barChartTransitionInMs * position++)
  })
}

function createCasesText (y, county) {
  const text = createSVGElement('text', {
    x: 9,
    y: y,
    'text-anchor': 'end'
  })
  text.textContent = county.cases_per_100k.toFixed(1)
  return text
}

function createCountyText (y, county) {
  const text = createSVGElement('text', {
    x: 11,
    y: y,
    'text-anchor': 'start'
  })
  text.textContent = `${county.county} (${county.BL})`
  return text
}

function createBarRect (y, county, fill) {
  const rect = createSVGElement('rect', {
    x: 10,
    y: y,
    width: normalize(county.cases_per_100k, 0, sortedData[0].cases_per_100k) * 69,
    height: 3,
    fill: fill
  })
  return rect
}

function getOptions () {
  const selection = option.value
  const state = select.value
  switch (selection) {
    case 'red':
      return { state: state, amount: 3, fill: 'red', stroke: 'yellow', strokeWidth: '0.1' }
    case 'yellow':
      return { state: state, amount: 4, fill: 'yellow', stroke: 'blue', strokeWidth: '0.4' }
    case 'green':
      return { state: state, amount: 5, fill: 'green', stroke: 'white', strokeWidth: '0.2' }
    case 'blue':
      return { state: state, amount: 6, fill: 'blue', stroke: 'black', strokeWidth: '0.3' }
    default:
      return { state: state }
  }
}
