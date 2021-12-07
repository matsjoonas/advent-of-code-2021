
const day071 = function day071(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')[0]
    .split(',')
    .map(Number)
    .sort((a, b) => a - b);

  const lowerBound = input[0];
  const higherBound = input[input.length - 1];

  let fuelPerPosition: number = -1;
  let position = lowerBound;

  for (position; position <= higherBound; position++) {
    const newFuelPerPosition = input.reduce((prev, curr) => {
      return prev + Math.abs(position - curr);
    }, 0);

    if (fuelPerPosition === -1 || newFuelPerPosition < fuelPerPosition) {
      fuelPerPosition = newFuelPerPosition;
    }
  }

  return fuelPerPosition;
}

export default day071;

