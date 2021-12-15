const getAdjacentCoords = function getAdjacentCoords(x: number, y: number, mode: string = 'diagonal'): number[][] {
  let points = [
    [x, y - 1],
    [x + 1, y],
    [x, y + 1],
    [x - 1, y],
  ];

  if (mode === 'diagonal') {
    points = [
      ...points,
      [x + 1, y - 1],
      [x + 1, y + 1],
      [x - 1, y + 1],
      [x - 1, y - 1],
    ]
  }

  return points;
}


export default getAdjacentCoords;
