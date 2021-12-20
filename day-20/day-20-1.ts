import iterateGrid from "../iterateGrid";
import getAdjacent from "./getAdjacent";

const testGrid = [
  [0, 0, 0, 0, 0],
  [0, 1, 2, 3, 0],
  [0, 4, 5, 6, 0],
  [0, 7, 8, 9, 0],
  [0, 0, 0, 0, 0],
]

const day121 = function day121(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n');

  const enhancementAlgo = input[0];
  const inputImage = input.slice(2).map(row => {
    return row.split('').map(char => {
      if (char === '#') {
        return 1;
      }
      return 0;
    });
  });

  console.log(enhancementAlgo);
  console.log(inputImage);
  iterateGrid(inputImage, (item: any, x: number, y: number) => {
    const adj = getAdjacent(inputImage, x, y);
    if (y === 2 && x === 2) {
      console.log(adj);
    }
  });
  console.log(getAdjacent(testGrid, 2, 2));

  return input;
}

export default day121;
