/* eslint-env browser */
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
  geodata.forEach(ring => {
    const coordinates = ring.reduce((acc, [x, y]) => acc + `${x},${y} `, '')

    const path = createSVGElement('path', {
      fill: 'none',
      stroke: 'black',
      'stroke-width': 1,
      d: `M ${coordinates}Z`
    })

    svg.appendChild(path)
  })
}

function createSVGElement (name, attributes) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', name)
  for (const attName in attributes) {
    element.setAttribute(attName, String(attributes[attName]))
  }
  return element
}
