export function createSVGElement(name, attributes) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', name)
  for (const attName in attributes) {
    element.setAttribute(attName, String(attributes[attName]))
  }
  return element
}

export function normalize(x, min, max) {
  return (x - min) / (max - min)
}

export function findMinMaxForXandYCoordinationPoints(countyGeometryMapping) {
  let minX = Infinity
  let minY = Infinity
  let maxX = 0
  let maxY = 0
  for (const rings of countyGeometryMapping.values()) {
    rings.forEach(ring => {
      ring.forEach(([x, y]) => {
        if (minX > x) {
          minX = x
        }
        if (minY > y) {
          minY = y
        }
        if (maxX < x) {
          maxX = x
        }
        if (maxY < y) {
          maxY = y
        }
      })
    })
  }
  return {
    minX, maxX, minY, maxY
  }
}