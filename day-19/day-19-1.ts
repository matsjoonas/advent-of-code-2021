import transformers from "./transformers";
import commonPointsForTransform from "./commonPointsForTransform";

const day191 = function day191(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n');

  const scanners: number[][][] = [];
  let scannerIndex = -1;
  input.forEach((line, index) => {
    if (line.includes('--- scanner')) {
      scannerIndex++;
    } else if (line !== '') {
      if (!scanners[scannerIndex]){
        scanners[scannerIndex] = [];
      }
      scanners[scannerIndex].push(line.split(',').map(Number))
    }
  });

  const commonPoints: { scannerIndexA: number; scannerIndexB: number; sharedPoints: string[][]; }[] = [];

  let scannerIndexA = 0;
  while (scanners.length > 1) {
    const scannerA = scanners.shift() || [];
    scanners.forEach((scannerB, scannerIndexB) => {
      transformers.forEach(transformer => {
        const sharedPoints = commonPointsForTransform(scannerA, scannerB, transformer);
        const points = sharedPoints.commonPoints;
        if (points.length >= 12 && (points[0][0] === points[points.length - 1][0])) {
          scanners[scannerIndexB] = sharedPoints.alignedB;
          commonPoints.push({
            scannerIndexA,
            scannerIndexB: scannerIndexA + scannerIndexB + 1,
            sharedPoints: sharedPoints.commonPoints
          });
        }
      });
    });
    scannerIndexA++;
  }

  const result = commonPoints;

  const scannerOffsets = [[0, 0, 0]];
  result.forEach(pair => {
    console.log(pair);
    const indexA = pair.scannerIndexA;
    const indexB = pair.scannerIndexB;
    let foundOffsetIndex;
    let searchingOffsetIndex;
    if (scannerOffsets[indexA]) {
      foundOffsetIndex = indexA;
      searchingOffsetIndex = indexB;
    } else {
      foundOffsetIndex = indexB;
      searchingOffsetIndex = indexA;
    }

    const scannerOffset = scannerOffsets[foundOffsetIndex];
    const relativeOffsets = pair.sharedPoints[0][0].split(',').map(Number);

    scannerOffsets[searchingOffsetIndex] = [scannerOffset[0] + relativeOffsets[0], scannerOffset[1] + relativeOffsets[1], scannerOffset[2] + relativeOffsets[2]];
    console.log(scannerOffsets);
  });

  console.log(scannerOffsets);

  return null;
}

export default day191;
