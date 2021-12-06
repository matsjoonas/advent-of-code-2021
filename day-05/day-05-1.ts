type Point = [number, number];
type Segment = [Point, Point];

const isDiagonal = function isDiagonal(line: Segment): boolean {
  return line[0][0] !== line[1][0] && line[0][1] !== line[1][1];
}

const isVertical = function isVertical(segment: Segment): boolean {
  return segment[0][0] === segment[1][0];
}

const isHorizontal = function isHorizontal(segment: Segment): boolean {
  return segment[0][1] === segment[1][1];
}

const convertSegmentToPoints = function convertSegmentToPoints(segment: Segment): number[][] {
  const points = [];
  const pointA = segment[0];
  const pointB = segment[1];
  // y is same and x is hanging
  if (isHorizontal(segment)) {
    for (let i = pointA[0]; i <= pointB[0]; i++) {
      points.push([i, pointA[1]]);
    }
  } else {
    // x is the same and y is changing
    for (let i = pointA[1]; i <= pointB[1]; i++) {
      points.push([pointA[0], i]);
    }
  }

  return points;
}

const day051 = function day051(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')
    .map(line => {
      return line.split(' -> ')
        .map((rawCoords): Point => {
          const coords = rawCoords.split(',').map(Number);
          return [coords[0], coords[1]];
        })
    })
    .map((segmentPoints): Segment => {

      const sortedPoints = segmentPoints.sort((a: Point, b: Point): number => {
        if (a[0] !== b[0]) {
          return a[0] - b[0];
        }
        return a[1] - b[1];
      });

      return [sortedPoints[0], sortedPoints[1]];
    })
    .filter(segment => !isDiagonal(segment));



  const allPoints = input.map(segment => {
    return convertSegmentToPoints(segment);
  }).flat();
  const pointsMap = new Map();
  allPoints.forEach(point => {
    const key = String(point[0]) + ',' + String(point[1]);

    const duplicateCount = pointsMap.get(key);
    if (duplicateCount === undefined) {
      pointsMap.set(key, 0);
    } else {
      pointsMap.set(key, duplicateCount + 1);
    }
  });

  const duplicates =  [...pointsMap].filter(point => point[1] > 0);
  return duplicates.length;
}

export default day051;

