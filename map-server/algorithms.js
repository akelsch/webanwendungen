export function douglasPeucker (pointList, epsilon) {
  // Find the point with the maximum distance
  let dmax = 0
  let index = 0
  const end = pointList.length

  for (let i = 1; i < end; i++) {
    const d = distance(pointList[i], pointList)
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
    const recResults2 = douglasPeucker(pointList.slice(index, end - 1), epsilon)

    // Build the result list
    resultList = recResults1.concat(recResults2)
  } else {
    resultList = [pointList[0], pointList[end - 1]]
  }
  // Return the result
  return resultList
}

function distance (point, pointList) {
  let max = 0

  pointList.forEach(element => {
    const x = element[0] - point[0]
    const y = element[1] - point[1]

    const distance = Math.sqrt(x * x + y * y)
    if (max < distance) {
      max = distance
    }
  })

  return max
}

export function webMercator (long, lat, zoom) {
  const x = (256 / (2 * Math.PI)) * (2 ** zoom) * (radians(long) + Math.PI)
  const y = (256 / (2 * Math.PI)) * (2 ** zoom) * (Math.PI - Math.log(Math.tan(Math.PI / 4 + radians(lat) / 2)))
  return [x, y]
}

function radians (degrees) {
  return degrees * (Math.PI / 180)
}
