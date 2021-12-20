const getAdjacent = function getAdjacent(grid: (number)[][], x: number, y: number) {
  const adjPoints = [
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
    [x - 1, y],
    [x, y],
    [x + 1, y],
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1],
  ];

  return adjPoints.reduce((acc, point) => {
    const row = grid[point[1]] || [];
    const value = row[point[0]] || 0;
    acc.push(value);
    return acc;
  }, []);
}

export default getAdjacent;
