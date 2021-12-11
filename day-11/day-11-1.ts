import getAdjacentCoords from "../getAdjacentCoords";
import mapGrid from "../mapGrid";
import iterateGrid from "../iterateGrid";

const getAdjacent = function getAdjacent(x: number, y: number) {
  return getAdjacentCoords(x, y).filter(point => {
    return (point[0] > -1) && (point[1] > -1) && (point[0] < 10) && (point[1] < 10);
  });
}

const increaseBy1 = function increaseBy1(grid: number[][]) {
  return mapGrid(grid, (item: number) => {
    return item + 1;
  });
}

const shouldFlash = function shouldFlash(value: number) {
  return value !== 0 && value > 9;
}

const flash = function flash(grid: number[][]) {
  const newGrid = [...grid];
  let hasUnflashedPoints = false;
  let flashes = 0;
  iterateGrid(grid, (currentPointValue: number, x: number, y: number, grid: number[][]) => {
    if (shouldFlash(currentPointValue)) {
      const adjacentPoints = getAdjacent(x, y);
      adjacentPoints.forEach(point => {
        const pointValue = newGrid[point[1]][point[0]];
        const newValue = pointValue === 0 ? pointValue : pointValue + 1;
        if (shouldFlash(newValue)) {
          hasUnflashedPoints = true;
        }
        newGrid[point[1]][point[0]] = newValue;
      });

      flashes++;
      newGrid[y][x] = 0;
    }
  });

  return {
    grid: newGrid,
    hasUnflashedPoints,
    flashes,
  }
}

const day111 = function day111(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n').map(line => line.split('').map(Number));


  let totalFlashes = 0;
  let newGrid = input;

  for (let i = 0; i < 100; i++) {
    let flashResult = flash(increaseBy1(newGrid));
    totalFlashes += flashResult.flashes;
    while (flashResult.hasUnflashedPoints) {
      flashResult = flash(flashResult.grid);
      totalFlashes += flashResult.flashes;
    }
    newGrid = flashResult.grid;
  }

  return totalFlashes;
}

export default day111;

