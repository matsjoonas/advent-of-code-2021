
const day061 = function day061(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n').map(line => line.split(',').map(Number))[0];

  let currentCycle = input;
  let nextCycle: number[] = [];
  let days = 256;
  for (let i = 0; i < days; i++) {
    nextCycle = [];
    currentCycle.forEach(fish => {
      let moddedFish = fish - 1;
      if (fish === 0) {
        nextCycle.push(8);
        moddedFish = 6;
      }
      nextCycle.push(moddedFish);
    });
    currentCycle = nextCycle;
  }

  return currentCycle.length;
}

export default day061;

