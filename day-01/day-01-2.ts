const day012 = function solver(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')
    .map(item => parseInt(item));

  let counter = 0;
  let prevSum = 0;

  while (input.length >= 3) {
    const thisSum = input.slice(0, 3).reduce((prev, cur) => prev + cur);

    if (prevSum && thisSum > prevSum) {
      counter ++;
    }

    prevSum = thisSum;
    input.shift();
  }

  return counter;
}

export default day012;
