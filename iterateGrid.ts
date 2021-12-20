const iterateGrid = function iterateGrid(grid: any[][], fn: Function) {
  for (let y = 0; y < grid.length; y++) {
    const row = grid[y];
    for (let x = 0; x < row.length; x++) {
      const item = row[x];
      fn(item, x, y, grid);
    }
  }
}

export default iterateGrid;
