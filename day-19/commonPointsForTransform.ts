const commonPointsForTransform = function commonPointsForTransform(pointsA: number[][], pointsB: number[][], transformerFn: Function) {
  const distances: string[][][] = [];
  // @ts-ignore
  const transPointsB = pointsB.map((point: [number, number, number]) => transformerFn(point));

  pointsA.forEach((pointA, indexA) => {
    if (!distances[indexA]) {
      distances[indexA] = [];
    }
    transPointsB.forEach(pointB => {
      const distance = [pointA[0] - pointB[0], pointA[1] - pointB[1], pointA[2] - pointB[2]];
      distances[indexA].push([distance.join(','), pointA.join(',')]);
    });
  });

  const matches: string[][] = [];

  while (distances.length) {
    const groupA = distances.shift();
    // @ts-ignore
    groupA.forEach(a => {
      distances.forEach(groupB => {
        groupB.forEach(b => {

          if (b[0] === a[0]) {
            matches.push(b);
            matches.push(a);
          }
        });
      })
    });
  }

  const result = [...new Set(matches.map(item => item.join('|')))];
  return {
    alignedB: transPointsB,
    commonPoints: result.map(line => line.split('|')),
  }
}

export default commonPointsForTransform;
