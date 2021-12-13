const fold = function fold(points: number[][], instruction: [string, number]) {
  let foldCoord = 0;
  let foldLength = instruction[1];
  if (instruction[0] === 'y') {
    foldCoord = 1;
  }

  const folded = points.map(point => {
    if (point[foldCoord] <= foldLength) {
      return point;
    }

    point[foldCoord] = 2 * foldLength - point[foldCoord];
    return point;
  });

  return folded;
}


const day131 = function day131(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n');

  const points = input.filter(item => !item.includes('fold') && item !== '')
    .map(item => item.split(',').map(Number));
  const instructions = input.filter(item => item.includes('fold'))
    .map(item => {
      return item.split('fold along ')[1].split('=');
    }).map(line => [line[0], parseInt(line[1])]);

  // console.log(points.sort((a, b) => a[0] - b[0]));
  // @ts-ignore
  const folded = fold(points, instructions[0]);
  return [...new Set(folded.map(point => point.join(',')))].length;
}

export default day131;

