const day031 = function day031(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n');

  let result: Array<number> = [];
  let rowCount: number = 0;

  input.forEach(row => {
    const currentRow: Array<number> = row.split('').map(item => parseInt(item));
    if (!result.length) {
      result = [...currentRow];
    }

    for (let i = 0; i < result.length; i++) {
      result[i] = result[i] + currentRow[i];
    }

    rowCount++;
  });

  const gammaRate: Array<string> = [];
  const epsilonRate: Array<string> = [];

  result.forEach((oneCount: number, index: number) => {
    if (oneCount > (rowCount / 2)) {
      gammaRate[index] = '1';
      epsilonRate[index] = '0';
    } else {
      gammaRate[index] = '0';
      epsilonRate[index] = '1';
    }
  });

  return parseInt(gammaRate.join(''), 2) * parseInt(epsilonRate.join(''), 2);
}

export default day031;

