
const day081 = function day081(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')
    .map(line => line.split(' | ')[1].split(' '));

  let uniqueSegmentDigitsCount = 0;
  const uniqueLengths = [2, 3, 4, 7];

  input.forEach(line => {
    line.forEach(digit => {
      if (uniqueLengths.includes(digit.length)) {
        uniqueSegmentDigitsCount++;
      }
    });
  });

  return uniqueSegmentDigitsCount;
}

export default day081;

