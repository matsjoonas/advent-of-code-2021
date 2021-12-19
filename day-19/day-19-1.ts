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

  console.log(scanners);


  return input;
}

export default day191;
