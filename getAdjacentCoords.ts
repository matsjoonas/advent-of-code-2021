const getAdjacentCoords = function getAdjacentCoords(x: number, y: number): number[][] {
  return [
    [x, y - 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
    [x, y + 1],
    [x - 1, y + 1],
    [x - 1, y],
    [x - 1, y - 1],
  ];
}


export default getAdjacentCoords;
