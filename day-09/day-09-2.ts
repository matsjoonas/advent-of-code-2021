
const isLowest = function isLowest(current: number, other: number[][]): boolean {
  let lowerNeighbour = other.find(item => item[2] <= current);
  return lowerNeighbour === undefined;
}

const getAdjacent = function getAdjacent(x: number, y: number, allPoints: number[][]): number[][] {
  const adjacentLocations = [];
  if (allPoints[y - 1]) {
    adjacentLocations.push([x, y - 1, allPoints[y - 1][x]])
  }
  if (allPoints[y + 1]) {
    adjacentLocations.push([x, y + 1, allPoints[y + 1][x]])
  }

  adjacentLocations.push([x - 1, y, allPoints[y][x - 1]])
  adjacentLocations.push([x + 1, y, allPoints[y][x + 1]])

  return adjacentLocations;
}

const getAdjacentBasinPoints = function getAdjacentBasinPoints(currentPoint: number[], allPoints: number[][]): number[][] {
  return getAdjacent(currentPoint[0], currentPoint[1], allPoints)
    .filter(point => {
      return point[2] !== 9 && point[2] > currentPoint[2];
    });
}

const getAllBasinPoints = function getAllBasinPoints(startingPoint: number[], allPoints: number[][]) {
  let basinPoints: number[][] = [startingPoint];
  let untraversedPoints = getAdjacentBasinPoints(startingPoint, allPoints);

  while (untraversedPoints.length > 0) {
    const currentPoint = untraversedPoints.pop();
    // @ts-ignore
    basinPoints.push(currentPoint);
    // @ts-ignore
    untraversedPoints = [...untraversedPoints, ...getAdjacentBasinPoints(currentPoint, allPoints)]
  }

  return basinPoints;
}

const day092 = function day092(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')
    .map(line => line.split('').map(Number));

  const lowest = [];
  let basins = [];

  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
      const currentValue = input[y][x];
      const adjacentLocations = getAdjacent(x, y, input);

      if (isLowest(currentValue, adjacentLocations)) {
        lowest.push(currentValue);
        basins.push(getAllBasinPoints([x, y, currentValue], input));
      }
    }
  }

  basins = basins.map(rawBasin => {
    let basin: number[][] = [];
    rawBasin.forEach(point => {
      if (!basin.find(item => item[0] === point[0] && item[1] === point[1])) {
        basin.push(point);
      }
    });
    return basin;
  });

  const basinSizes = basins.map(basin => basin.length).sort((a, b) => b - a);

  return basinSizes[0] * basinSizes[1] * basinSizes[2];
}

export default day092;

