/* eslint-env browser */
import { createSVGElement, normalize } from './common.js'

const form = document.getElementById('form')
const formUrl = document.getElementById('form-url')
const svg = document.getElementById('map')

form.onchange = event => {
  const url = getFormURL()
  formUrl.href = url
  formUrl.textContent = url
}

form.onsubmit = event => {
  event.preventDefault()

  const url = getFormURL()
  fetch(url)
    .then(response => response.json())
    .then(data => renderSvgMap(data))
}

form.dispatchEvent(new Event('change'))

function getFormURL () {
  const url = new URL(form.action)
  const queryParams = new URLSearchParams(new FormData(form))
  url.search = queryParams
  return url
}

function renderSvgMap (geodata) {
  svg.innerHTML = ''
  const { minX, maxX, minY, maxY } = determineMinMaxCoordinates(geodata)
  geodata.forEach(ring => {
    const normalizedCoordinates = ring.reduce((acc, [x, y]) => {
      const xNorm = normalize(x, minX, maxX) * 100
      const yNorm = normalize(y, minY, maxY) * 100
      return acc + `${xNorm},${yNorm} `
    }, '')

    const path = createSVGElement('path', {
      fill: 'none',
      stroke: 'black',
      'stroke-width': 0.1,
      d: `M ${normalizedCoordinates}Z`
    })

    svg.appendChild(path)
  })
}

function determineMinMaxCoordinates (geodata) {
  return geodata.reduce((acc, ring) => {
    // Effizienter als das Array erst zu flatten
    ring.forEach(([x, y]) => {
      if (x < acc.minX) {
        acc.minX = x
      }
      if (x > acc.maxX) {
        acc.maxX = x
      }
      if (y < acc.minY) {
        acc.minY = y
      }
      if (y > acc.maxY) {
        acc.maxY = y
      }
    })
    return acc
  }, { minX: Infinity, maxX: 0, minY: Infinity, maxY: 0 })
}
