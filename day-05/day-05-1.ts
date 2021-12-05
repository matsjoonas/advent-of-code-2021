type Point = [number, number];
type Segment = [Point, Point, number];

const isDiagonal = function isDiagonal(line: Segment): boolean {
  return line[0][0] !== line[1][0] && line[0][1] !== line[1][1];
}

/*
const arePerpendicular = function arePerpendicular(a: Segment, b: Segment): boolean {
  if (a[0][1] === b[])
}

const getOverlaps = function getOverlaps(a: Segment, b: Segment): Segment[] {

}

const orderPoints

const rateSegments = function rateSegments(segments: Segment[]): Segment[] {
  const ratedSegments: number[][][] = [];

  segments.forEach((segment, index) => {
    // foreach ratedSegment
    // take the segment out
    // split into intersections
    // put back in the rated segments
  });
}
*/
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

      return [sortedPoints[0], sortedPoints[1], 0];
    })
    .filter(segment => !isDiagonal(segment));



  const ratedSegments = [];
  console.log(input);

  // keys x and y
  // [0,9] [] [1]
  // y9 [0, 5, 1]
  // discard diagonals
  // y4 [9, 3]
  // x2 [2, 1]
  // y9 [0, 2]


  return input;
}

export default day051;

