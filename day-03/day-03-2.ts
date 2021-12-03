
function filter(inputRows: Array<string>, bitIndex: number = 0, commonBitWins: boolean = true): Array<string> {
  const nrOfRows = inputRows.length;
  let withOnes: Array<string> = [];
  let withZeros: Array<string> = [];

  for (let i = 0; i < nrOfRows; i++) {
    const row = inputRows[i];
    if (row.charAt(bitIndex) === '1') {
      withOnes.push(row);
    } else {
      withZeros.push(row);
    }
  }

  if (commonBitWins) {
    if (withOnes.length >= (nrOfRows / 2)) {
      return withOnes;
    }

    return withZeros;
  }

  if (withOnes.length < (nrOfRows / 2)) {
    return withOnes;
  }

  return withZeros;
}

const day032 = function day032(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n');

  const bitLength = input[0].length;

  let oxyRows = input;
  let scrubRows = input;

  for (let i = 0; i < bitLength; i++) {
    if (oxyRows.length !== 1) {
      oxyRows = filter(oxyRows, i, true);
    }
    if (scrubRows.length !== 1) {
      scrubRows = filter(scrubRows, i, false);
    }
  }

  return parseInt(oxyRows[0], 2) * parseInt(scrubRows[0], 2);
}

export default day032;
