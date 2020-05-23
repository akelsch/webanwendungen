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
