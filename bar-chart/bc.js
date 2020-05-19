import { bcData } from './bc-data.js'

// Data
const sortedData = bcData.features.sort((x, y) => y.attributes.cases_per_100k - x.attributes.cases_per_100k)

// DOM
const select = document.getElementById('state')
const svg = document.getElementsByTagName('svg')[0]

// SVG
let top10
let casesY
let countyY
let barY

function fillSelectWithOptions () {
  let bundesLaender = new Set()
  sortedData.forEach(elem => bundesLaender.add(elem.attributes.BL))

  bundesLaender = [...bundesLaender].sort()
  bundesLaender.forEach(land => {
    const option = document.createElement('option')
    option.value = land
    option.textContent = land
    select.appendChild(option)
  })
}

function updateSvg (selection) {
  resetSvg()

  top10 = sortedData.filter(elem => elem.attributes.BL === selection || selection === 'alle').slice(0, 10)
  top10.forEach(elem => {
    renderCasesText(elem.attributes.cases_per_100k)
    renderCountyText(elem.attributes.county, elem.attributes.BL)
    renderBarRect(elem.attributes.cases_per_100k, top10[0].attributes.cases_per_100k)
    casesY += 7
    countyY += 7
    barY += 7
  })
}

function resetSvg () {
  svg.innerHTML = ''
  casesY = 11
  countyY = 7
  barY = 8
}

function renderCasesText (cases) {
  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
  text.setAttribute('x', 9)
  text.setAttribute('y', casesY)
  text.setAttribute('class', 'text')
  text.setAttribute('text-anchor', 'end')
  text.textContent = cases.toFixed(1)
  svg.appendChild(text)
}

function renderCountyText (county, bl) {
  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
  text.setAttribute('x', 11)
  text.setAttribute('y', countyY)
  text.setAttribute('class', 'text')
  text.setAttribute('text-anchor', 'start')
  text.textContent = `${county} (${bl})`
  svg.appendChild(text)
}

function renderBarRect (cases, max) {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
  rect.setAttribute('width', minMaxNormalization(cases, 0, max) * 69)
  rect.setAttribute('height', 3)
  rect.setAttribute('x', 10)
  rect.setAttribute('y', barY)
  rect.setAttribute('fill', 'lightblue')
  rect.setAttribute('class', 'bar')
  svg.appendChild(rect)
}

// Gleich das Wissen aus Data Science anwenden :D
function minMaxNormalization (x, min, max) {
  return (x - min) / (max - min)
}

// Start
fillSelectWithOptions()
updateSvg(select.value)
select.onchange = event => updateSvg(event.target.value)
