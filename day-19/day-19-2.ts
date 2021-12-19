import transformers from "./transformers";
import commonPointsForTransform from "./commonPointsForTransform";

const day192 = function day192(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n');

  const scanners: number[][][] = [];
  let scannerIndex = -1;
  input.forEach((line, index) => {
    if (line.includes('--- scanner')) {
      scannerIndex++;
    } else if (line !== '') {
      if (!scanners[scannerIndex]) {
        scanners[scannerIndex] = [];
      }
      scanners[scannerIndex].push(line.split(',').map(Number))
    }
  });

  const parsedScanners: ({ points: number[][]; index: number; } | undefined)[] = [];

  const pairs: {
    // @ts-ignore
    indexA: number; indexB: number; offset: string;
  }[] = [];

  const alignedScannersQueue = [{
    points: scanners[0],
    index: 0,
  }];

  while (alignedScannersQueue.length) {
    const alignedScanner = alignedScannersQueue.shift();
    // @ts-ignore
    if (parsedScanners.find(item => item.index === alignedScanner.index)) {
      continue;
    }
    parsedScanners.push(alignedScanner);
    for (let indexB = 0; indexB < scanners.length; indexB++) {
      // @ts-ignore
      if (alignedScanner.index === indexB) {
        continue;
      }
      // @ts-ignore
      if (pairs.find(item => item.indexA === indexB && item.indexB === alignedScanner.index)) {
        continue;
      }
      // @ts-ignore
      const pointsA = alignedScanner.points;
      const pointsB = scanners[indexB];

      transformers.forEach(transformer => {
        const transformResult = commonPointsForTransform(pointsA, pointsB, transformer);
        const commonPoints = transformResult.commonPoints;

        if (commonPoints.length >= 12 && (commonPoints[0][0] === commonPoints[commonPoints.length - 1][0])) {
          alignedScannersQueue.push({
            points: transformResult.alignedB,
            index: indexB,
          });
          pairs.push({
            // @ts-ignore
            indexA: alignedScanner.index,
            indexB,
            offset: commonPoints[0][0],
          });
        }
      });
    }
  }


  const scannerOffsets = [[0, 0, 0]];
  while(pairs.length) {
    const currentPair = pairs.shift();
    // @ts-ignore
    const pairOffset = currentPair.offset.split(',').map(Number);
    // @ts-ignore
    const offsetFrom0A = scannerOffsets[currentPair.indexA];
    const offsetFrom0B = [offsetFrom0A[0] + pairOffset[0], offsetFrom0A[1] + pairOffset[1], offsetFrom0A[2] + pairOffset[2]];
    // @ts-ignore
    scannerOffsets[currentPair.indexB] = offsetFrom0B;
  }

  const distances = scannerOffsets.reduce((acc, cur) => {
    const ds = scannerOffsets.map(offset => {
      return Math.abs(cur[0] - offset[0]) + Math.abs(cur[1] - offset[1]) + Math.abs(cur[2] - offset[2]);
    });
    return [...acc, ...ds];
  }, []);

  return distances.sort((a, b) => b - a)[0];
}

export default day192;
