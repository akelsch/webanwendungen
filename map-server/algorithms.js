export function douglasPeucker (points, epsilon) {
  const end = points.length - 1

  // Finde den Punkt mit dem größten Abstand
  let dmax = 0
  let index = 0
  for (let i = 1; i < end; i++) {
    const d = perpendicularDistance(points[i], points[0], points[end])
    if (d > dmax) {
      dmax = d
      index = i
    }
  }

  // Wenn die maximale Entfernung größer als Epsilon ist, dann rekursiv vereinfachen
  if (dmax > epsilon) {
    const r1 = douglasPeucker(points.slice(0, index + 1), epsilon)
    const r2 = douglasPeucker(points.slice(index), epsilon)
    return r1.slice(0, r1.length - 1).concat(r2)
  } else {
    return [points[0], points[end]]
  }
}

function perpendicularDistance (point, lineStart, lineEnd) {
  let dx = lineEnd[0] - lineStart[0]
  let dy = lineEnd[1] - lineStart[1]

  // Normalize
  const mag = Math.hypot(dx, dy)
  if (mag > 0.0) {
    dx /= mag
    dy /= mag
  }
  const pvx = point[0] - lineStart[0]
  const pvy = point[1] - lineStart[1]

  // Get dot product (project pv onto normalized direction)
  const pvdot = dx * pvx + dy * pvy

  // Scale line direction vector and subtract it from pv
  const ax = pvx - pvdot * dx
  const ay = pvy - pvdot * dy

  return Math.hypot(ax, ay)
}

export function webMercator (long, lat, zoom) {
  const x = (256 / (2 * Math.PI)) * (2 ** zoom) * (radians(long) + Math.PI)
  const y = (256 / (2 * Math.PI)) * (2 ** zoom) * (Math.PI - Math.log(Math.tan(Math.PI / 4 + radians(lat) / 2)))
  return [x, y]
}

function radians (degrees) {
  return degrees * (Math.PI / 180)
}
