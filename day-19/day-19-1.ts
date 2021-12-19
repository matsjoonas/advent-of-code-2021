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
        if (sharedPoints.length) {
          commonPoints.push({
            scannerIndexA,
            scannerIndexB: scannerIndexA + scannerIndexB + 1,
            sharedPoints,
          });
        }
      });
    });
    scannerIndexA++;
  }

  const result = commonPoints.filter(field => {
    return field.sharedPoints.length >= 12 && (field.sharedPoints[0][0] === field.sharedPoints[field.sharedPoints.length - 1][0]);
  });

  console.log(result);

  return null;
}

export default day191;
