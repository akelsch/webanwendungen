function douglasPeucker(pointList, epsilon) {
  // Find the point with the maximum distance
  let dmax = 0
  let index = 0
  let end = pointList.length

  for (i = 1; i < end; i++) {
    d = distance(pointList[i], pointList)
    if (d > dmax) {
      index = i
      dmax = d
    }
  }

  let resultList = [];

  // If max distance is greater than epsilon, recursively simplify
  if (dmax > epsilon) {
    // Recursive call
    let recResults1 = douglasPeucker(pointList.slice(0, index), epsilon)
    let recResults2 = douglasPeucker(pointList.slice(index, end - 1), epsilon)

    // Build the result list
    resultList = recResults1.concat(recResults2);
  } else {
    resultList = new Array(pointList[0], pointList[end - 1])
  }
  // Return the result
  return resultList
}

function distance(point, pointList) {
  let max = 0;

  pointList.forEach(element => {
    let x = element.x - point.x;
    let y = element.y - point.y;

    let distance = Math.sqrt(x * x + y * y);
    if (max < distance) {
      max = distance;
    }
  });

  return max;
}

var points = [{ x: 45, y: 64 }, { x: 56, y: 98 }, { x: 23, y: 44 }, { x: 22, y: 44 }, { x: 23, y: 45 }, { x: 23, y: 46 }, { x: 23, y: 47 }, { x: 23, y: 48 }, { x: 56, y: 99 }, { x: 55, y: 98 }];

points = douglasPeucker(points, 1);

console.log(points);
