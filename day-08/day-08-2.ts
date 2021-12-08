const subtract = function subtract(a: string[], b: string[]): string[] {
  return a.filter((item) => b.indexOf(item) === -1);
};

const findThree = function findThree(inputSignals: string[][], digits: string[][]): string[] {
  let uniques = inputSignals.map(signal => subtract(signal, digits[1]));
  console.log(digits[1]);
  console.log(uniques);
  return uniques[1];
}

const day082 = function day082(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')
    .map(line => {
      return line
        .split(' | ')
        .map(section => {
          return section
            .split(' ')
            .map(item => {
              return item.split('').sort();
            });
        });
    });

  let uniqueSegmentDigitsCount = 0;
  let sum = 0;

  input.forEach(line => {
    const digits: string[][] = [];
    const inputSignals = line[0].sort((a, b) => a.length - b.length);
    const out = line[1];

    digits[1] = inputSignals.splice(0, 1)[0];
    digits[7] = inputSignals.splice(0, 1)[0];
    digits[4] = inputSignals.splice(0, 1)[0];
    // @ts-ignore
    digits[8] = inputSignals.pop();

    // find 3 and 6
    const indexOf3 = inputSignals.findIndex(signal => subtract(signal, digits[1]).length === 3);
    digits[3] = inputSignals.splice(indexOf3, 1)[0];

    const indexOf6 = inputSignals.findIndex(signal => subtract(signal, digits[1]).length === 5);
    digits[6] = inputSignals.splice(indexOf6, 1)[0];

    const indexOf9 = inputSignals.findIndex(signal => {
      return (signal.length === 6) && (subtract(signal, digits[4]).length === 2);
    });
    digits[9] = inputSignals.splice(indexOf9, 1)[0];
    // @ts-ignore
    digits[0] = inputSignals.pop();

    const indexOf5 = inputSignals.findIndex(signal => {
      return subtract(signal, digits[4]).length === 2;
    });

    digits[5] = inputSignals.splice(indexOf5, 1)[0];
    digits[2] = inputSignals[0];

    const fullDigitStrings = digits.map(item => item.join(''));
    const outDigits = out.map(item => item.join(''))
      .map(outDigit => fullDigitStrings.findIndex(item => item === outDigit));
    sum += parseInt(outDigits.join(''));
  });
  
  return sum;
}

export default day082;
