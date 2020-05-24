export function douglasPeucker (pointList, epsilon) {
  // Find the point with the maximum distance
  let dmax = 0
  let index = 0
  const end = pointList.length - 1

  for (let i = 1; i < end; i++) {
    const d = perpendicularDistance(pointList[i], pointList[0], pointList[end])
    if (d > dmax) {
      index = i
      dmax = d
    }
  }

  let resultList = []

  // If max distance is greater than epsilon, recursively simplify
  if (dmax > epsilon) {
    // Recursive call
    const recResults1 = douglasPeucker(pointList.slice(0, index), epsilon)
    const recResults2 = douglasPeucker(pointList.slice(index, end), epsilon)

    // Build the result list
    resultList = recResults1.concat(recResults2)
  } else {
    resultList = [pointList[0], pointList[end]]
  }
  // Return the result
  return resultList
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
