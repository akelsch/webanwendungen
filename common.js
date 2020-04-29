export function createSVGElement (name, attributes) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', name)
  for (const attName in attributes) {
    element.setAttribute(attName, String(attributes[attName]))
  }
  return element
}

export function normalize (x, min, max) {
  return (x - min) / (max - min)
}

export function createTable () {
  const table = document.createElement('table')
  const tbody = document.createElement('tbody')
  table.appendChild(tbody)
  return table
}

export function appendRowToTable (table, ...row) {
  const tr = document.createElement('tr')
  row.forEach(data => {
    const td = document.createElement('td')
    td.textContent = data
    tr.appendChild(td)
  })
  table.firstChild.appendChild(tr)
}
