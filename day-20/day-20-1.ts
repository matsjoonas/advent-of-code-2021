import iterateGrid from "../iterateGrid";
import getAdjacent from "./getAdjacent";
import mapGrid from "../mapGrid";
import padGrid from "./padGrid";

const day121 = function day121(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n');

  const enhancementAlgo = input[0].split('').map(char => {
    if (char === '#') {
      return '1';
    }
    return '0';
  });

  const inputImage = input.slice(2).map(row => {
    return row.split('').map(char => {
      if (char === '#') {
        return '1';
      }
      return '0';
    });
  });
  //console.log(inputImage.map(item => item.join('')));

  let enhancedImage = inputImage;
  for (let i = 0; i < 1; i++) {
    let paddedImage = [...padGrid(enhancedImage, '0')];

    // @ts-ignore
    enhancedImage = mapGrid(paddedImage, (item: any, x: number, y: number) => {
      const adj = getAdjacent(paddedImage, x, y,  '0');
      const enhancementIndex = parseInt(adj.join(''), 2);
      return enhancementAlgo[enhancementIndex];
    });

    paddedImage = [...padGrid(enhancedImage, '1')];

    // @ts-ignore
    enhancedImage = mapGrid(paddedImage, (item: any, x: number, y: number) => {
      const adj = getAdjacent(paddedImage, x, y,  '1');
      const enhancementIndex = parseInt(adj.join(''), 2);
      return enhancementAlgo[enhancementIndex];
    });
  }

  const litPixels = enhancedImage.map(line => line.join('')).join('').split('').filter(char => char === '1');

  return litPixels.length;
}

export default day121;
