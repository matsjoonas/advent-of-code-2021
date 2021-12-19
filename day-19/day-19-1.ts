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

  const testResult = commonPointsForTransform(scanners[0], scanners[1], transformers[5]);
  console.log(testResult);
  console.log(testResult.length);
  return;

  const commonPoints: string[][][] = [];

  while (scanners.length > 1) {
    const scannerA = scanners.shift() || [];
    scanners.forEach(scannerB => {
      transformers.forEach(transformer => {
        const sharedPoints = commonPointsForTransform(scannerA, scannerB, transformer);
        if (sharedPoints.length) {
          commonPoints.push(sharedPoints);
        }
      });
    });
  }

  const result = commonPoints.filter(field => {
    return field.length >= 12;
  });
  console.log(commonPoints);
  console.log(result);


  return null;
}

export default day191;
