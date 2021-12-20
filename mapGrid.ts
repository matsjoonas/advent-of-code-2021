import iterateGrid from "./iterateGrid";

const mapGrid = function mapGrid(grid: any[][], fn: Function) {
  const result: any[][] = [];
  iterateGrid(grid, (item: any, x: number, y: number) => {
    if (result[y] === undefined) {
      result[y] = [];
    }
    result[y][x] = fn(item, x, y, grid);
  });
  return result;
}

export default mapGrid;
