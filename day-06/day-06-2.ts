
const day062 = function day062(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n').map(line => line.split(',').map(Number))[0];

  let currentCycle: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  input.forEach(age => {
    currentCycle[age] = currentCycle[age] + 1;
  });
  let nextCycle: number[] = [];
  let days = 256;

  for (let i = 0; i < days; i++) {
    nextCycle = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    currentCycle.forEach((fishCountInAgeGroup, age) => {
      if (age === 0) {
        nextCycle[6] = fishCountInAgeGroup;
        nextCycle[8] = nextCycle[8] + fishCountInAgeGroup;
      } else {
        nextCycle[age - 1] = nextCycle[age - 1] + fishCountInAgeGroup;
      }
    });
    currentCycle = nextCycle;
  }

  return currentCycle.reduce((prev, curr) => prev + curr, 0);
}

export default day062;

