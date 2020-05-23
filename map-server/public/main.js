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

function getFormURL () {
  const url = new URL(form.action)
  const queryParams = new URLSearchParams(new FormData(form))
  url.search = queryParams
  return url
}

function renderSvgMap (geodata) {
  svg.innerHTML = ''
  const minMaxData = determineMinMaxData(geodata)
  geodata.forEach(state => {
    state.forEach(ring => {
      let pathData = 'M '
      ring.forEach(([x, y]) => {
        pathData += `${normalize(x, minMaxData.minX, minMaxData.maxX) * 100},${normalize(y, minMaxData.minY, minMaxData.maxY) * 100} `
      })
      pathData += 'Z'

      const path = createSVGElement('path', {
        fill: 'none',
        stroke: 'black',
        'stroke-width': 0.1,
        d: pathData
      })

      svg.appendChild(path)
    })
  })
}

function determineMinMaxData (geodata) {
  let minX = Infinity
  let minY = Infinity
  let maxX = 0
  let maxY = 0
  geodata.forEach(state => {
    state.forEach(ring => {
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

form.dispatchEvent(new Event('change'))
