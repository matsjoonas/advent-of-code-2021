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

  const commonPoints: { scannerIndexA: number; scannerIndexB: number; sharedPoints: string[][]; }[] = [];
  const scannersWithMeta = scanners.map((scanner, index) => ({
    scanner,
    aligned: index === 0,
  }));

  let scannerWithMetaIndexA = 0;
  while (scannersWithMeta.length > 1) {
    const scannerWithMetaA = scannersWithMeta.shift();

    scannersWithMeta.forEach((scannerWithMetaB, scannerWithMetaIndexB) => {
      let scannerA: number[][];
      let scannerB: number[][];
      let scannerIndexA: number;
      let scannerIndexB: number;
      // @ts-ignore

      if (scannerWithMetaA.aligned) {
        // @ts-ignore
        scannerA = scannerWithMetaA.scanner;
        scannerB = scannerWithMetaB.scanner;
        scannerIndexA = scannerWithMetaIndexA;
        scannerIndexB = scannerWithMetaIndexA + scannerWithMetaIndexB + 1;
      } else if (scannerWithMetaB.aligned) {
        scannerA = scannerWithMetaB.scanner;
        // @ts-ignore
        scannerB = scannerWithMetaA.scanner;
        scannerIndexA = scannerWithMetaIndexA + scannerWithMetaIndexB + 1;
        scannerIndexB = scannerWithMetaIndexA;
      }


      transformers.forEach(transformer => {
        const sharedPoints = commonPointsForTransform(scannerA, scannerB, transformer);
        const points = sharedPoints.commonPoints;

        if (points.length >= 12 && (points[0][0] === points[points.length - 1][0])) {
          if (!scannerWithMetaB.aligned) {
            scannersWithMeta[scannerWithMetaIndexB] = {
              scanner: sharedPoints.alignedB,
              aligned: true,
            };
          }
          commonPoints.push({
            scannerIndexA,
            scannerIndexB,
            sharedPoints: sharedPoints.commonPoints
          });
        }
      });

    });
    scannerWithMetaIndexA++;
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
