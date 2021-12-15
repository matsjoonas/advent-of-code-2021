import getAdjacentCoords from "../getAdjacentCoords";

const getAdjacent = function getAdjacent(x: number, y: number) {
  return getAdjacentCoords(x, y, 'noDiagonal').filter(point => {
    return (point[0] > -1) && (point[1] > -1);
  });
}

const getPointValue = function getPointValue(x: number, y: number, grid: number[][]) {
  let pointValue;
  let row = grid[y];
  if (row) {
    pointValue = row[x];
  }
  return pointValue;
}

const day151 = function day151(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')
    .map(line => line.split('').map(Number));

  const endPoint = [input[0].length - 1, input.length - 1];

  let paths = [
    {
      x: 0,
      y: 0,
      length: 0,
    }
  ];

  let endPath;
  let iterations = 10;
  let visitedPoints: string[] = [];
  while (!endPath) {
    const sortedPaths = paths.sort((a, b) => a.length - b.length);
    const shortestPath = sortedPaths.shift();
    // @ts-ignore
    const {x, y, length, prevPoints} = shortestPath;
    const adjacentPoints = getAdjacent(x, y);
    const newPaths: {
        // @ts-ignore
        x: number;
        // @ts-ignore
        y: number;
        // @ts-ignore
        length: any;
    }[] = [];
    adjacentPoints
      .filter(point => {
        return !visitedPoints.includes(point.join(','));
      })
      .forEach(point => {

        let pointValue = getPointValue(point[0], point[1], input);
        if (pointValue !== undefined) {
          const newPath = {
            // @ts-ignore
            x: point[0],
            // @ts-ignore
            y: point[1],
            // @ts-ignore
            length: pointValue + length,
          }
          visitedPoints = [...visitedPoints, point.join(',')];
          newPaths.push(newPath);

          if (endPoint[0] === point[0] && endPoint[1] === point[1]) {
            endPath = newPath;
          }
        }
      });
    paths = [...sortedPaths, ...newPaths];
  }


  // @ts-ignore
  return endPath.length;
}

export default day151;

