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


  console.log(pairs);

  /*
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

    console.log(scannerOffsets);
    console.log(foundOffsetIndex);
    const scannerOffset = scannerOffsets[foundOffsetIndex];
    const relativeOffsets = pair.sharedPoints[0][0].split(',').map(Number);

    scannerOffsets[searchingOffsetIndex] = [scannerOffset[0] + relativeOffsets[0], scannerOffset[1] + relativeOffsets[1], scannerOffset[2] + relativeOffsets[2]];
  });

  const alignedScanners: any[] = [];
  result.forEach(item => {
    if (!alignedScanners[item.scannerIndexA]) {
      alignedScanners[item.scannerIndexA] = item.scannerA.scanner;
    }
    if (!alignedScanners[item.scannerIndexB]) {
      alignedScanners[item.scannerIndexB] = item.scannerB.scanner;
    }
  });

  const adjustedBeacons = alignedScanners.map((beacons, index) => {
    const currentOffset = scannerOffsets[index];
    return beacons.map((beacon: number[]) => [beacon[0] + currentOffset[0], beacon[1] + currentOffset[1], beacon[2] + currentOffset[2]]);
  });

  const beaconsAsStrings = adjustedBeacons.flat().map(item => item.join(','));

  return [...new Set(beaconsAsStrings)].length;
*/
}

export default day191;
