/* eslint-env browser */
import { mapData } from './map-data.js'
import { createSVGElement, normalize } from './common.js'

// DOM
const select = document.getElementById('state')
const svg = document.getElementById('bar-chart')

// CSS
const barChartTransitionInMs = 750

// Data
const sortedData = mapData.features.map(elem => elem.attributes)
  .sort((x, y) => y.cases_per_100k - x.cases_per_100k)

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
  let position = 0

  const topN = sortedData.filter(county => county.BL === state || state === 'alle').slice(0, amount)
  topN.forEach(county => {
    const group = createSVGElement('g', { opacity: 0, })

    group.appendChild(createCasesText(casesY, county))
    casesY += 7

    group.appendChild(createCountyText(countyY, county))
    countyY += 7

    const bar = createBarRect(barY, county)
    group.appendChild(bar)
    barY += 7

    svg.appendChild(group)

    // Referenz: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#JavaScript_examples
    window.setTimeout(() => {
      group.removeAttribute('opacity')
      bar.removeAttribute('style')
    }, barChartTransitionInMs * position++)
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
    width: normalize(county.cases_per_100k, 0, sortedData[0].cases_per_100k) * 69,
    height: 3,
    x: 10,
    y: y,
    fill: 'lightblue',
    class: 'bar',
    style: 'width: 0;'
  })
  return rect
}

initSelect()
drawBarChart({ state: select.value })
select.onchange = event => drawBarChart({ state: event.target.value })
