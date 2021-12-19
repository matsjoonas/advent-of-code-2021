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

  const commonPoints: {
    scannerA: any;
    scannerB: any;
    scannerIndexA: number; scannerIndexB: number; sharedPoints: string[][]; }[] = [];
  const scannersWithMeta = scanners.map((scanner, index) => ({
    scanner,
    aligned: index === 0,
  }));

  let scannerWithMetaIndexA = 0;
  while (scannersWithMeta.length > 1) {
    const scannerWithMetaA = scannersWithMeta.shift();

    scannersWithMeta.forEach((scannerWithMetaB, scannerWithMetaIndexB) => {
      let scannerA: { scanner: number[][]; aligned: boolean };
      let scannerB: { scanner: number[][]; aligned: boolean };
      let scannerIndexA: number;
      let scannerIndexB: number;
      // @ts-ignore

      if (scannerWithMetaA.aligned) {
        // @ts-ignore
        scannerA = scannerWithMetaA;
        scannerB = scannerWithMetaB;
        scannerIndexA = scannerWithMetaIndexA;
        scannerIndexB = scannerWithMetaIndexA + scannerWithMetaIndexB + 1;
      } else if (scannerWithMetaB.aligned) {
        scannerA = scannerWithMetaB;
        // @ts-ignore
        scannerB = scannerWithMetaA;
        scannerIndexA = scannerWithMetaIndexA + scannerWithMetaIndexB + 1;
        scannerIndexB = scannerWithMetaIndexA;
      } else {
        // @ts-ignore
        scannerA = scannerWithMetaA;
        scannerB = scannerWithMetaB;
        scannerIndexA = scannerWithMetaIndexA;
        scannerIndexB = scannerWithMetaIndexA + scannerWithMetaIndexB + 1;
      }


      transformers.forEach(transformer => {
        const sharedPoints = commonPointsForTransform(scannerA.scanner, scannerB.scanner, transformer);
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
          // @ts-ignore
            scannerA,
            // @ts-ignore
            scannerB: {
              scanner: sharedPoints.alignedB,
              aligned: true,
            },
            sharedPoints: sharedPoints.commonPoints
          });
        }
      });

    });
    scannerWithMetaIndexA++;
  }

  const result = commonPoints.sort((a, b) => {
    return (a.scannerIndexA + a.scannerIndexB) - (b.scannerIndexA + b.scannerIndexB);
  });

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
}

export default day191;
