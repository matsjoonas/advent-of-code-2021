const padGrid = function padGrid(grid: any[][], char: string) {
  const paddedGrid = [];
  const paddingRow = new Array(grid[0].length + 3).join(char);
  paddedGrid.push([...paddingRow]);
  for (let y = 0; y < grid.length; y++) {
    const row = grid[y];
    paddedGrid.push([char, ...row, char]);
  }
  paddedGrid.push([...paddingRow]);
  return paddedGrid;
}

export default padGrid;
