const fold = function fold(points: number[][], instruction: any[]) {
  let foldCoord = 0;
  let foldLength = instruction[1];
  if (instruction[0] === 'y') {
    foldCoord = 1;
  }

  const folded = points.map(point => {
    if (point[foldCoord] <= foldLength) {
      return point;
    }

    const newPoint = [...point];
    newPoint[foldCoord] = 2 * foldLength - point[foldCoord];
    if (points.find(pt => pt[0] === newPoint[0] && pt[1] === newPoint[1])) {
      return [-1, -1];
    }
    return newPoint;
  });

  return folded.filter(pt => pt[0] !== -1 && pt[1] !== -1);
}

const createGrid = function createGrid(gridX: number, gridY: number) {
  let grid: string[][] = [];
  let row = [];
  for (let x = 0; x <= gridX; x++) {
    row.push('░');
  }

  for (let y = 0; y <= gridY; y++) {
    grid.push([...row]);
  }

  return grid;
};

const plot = function plot(points: number[][]) {
  const gridX = points.sort((a, b) => b[0] - a[0])[0][0];
  const gridY = points.sort((a, b) => b[1] - a[1])[1][1];
  const grid = createGrid(gridX, gridY);

  points.forEach(point => {
    grid[point[1]][point[0]] = '#';
  });
  console.log(grid.map(line => line.join('')));
};


const day132 = function day132(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n');

  const points = input.filter(item => !item.includes('fold') && item !== '')
    .map(item => item.split(',').map(Number));
  const instructions = input.filter(item => item.includes('fold'))
    .map(item => {
      return item.split('fold along ')[1].split('=');
    }).map(line => [line[0], parseInt(line[1])]);

  let folded = points;
  instructions.forEach(instruction => {
    folded = fold(folded, instruction);
  });

  plot(folded);
  return null;
}

export default day132;

