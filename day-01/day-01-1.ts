const day011 = function day011(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')
    .map(item => parseInt(item));

  let counter: number = 0;
  let prev: number | undefined = undefined;
  input.forEach((measurement: number) => {
    if (prev !== undefined && measurement > prev) {
      counter++;
    }
    prev = measurement;
  });

  return counter;
}

export default day011;

