
const isLowest = function isLowest(current: number, other: number[]): boolean {
  let lowerNeighbour = other.find(item => item <= current);
  return lowerNeighbour === undefined;
}

const day091 = function day091(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')
    .map(line => line.split('').map(Number));

  const lowest = [];

  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
      const currentValue = input[y][x];
      const adjacentLocations = [];

      if (input[y - 1]) {
        adjacentLocations.push(input[y - 1][x])
      }
      if (input[y + 1]) {
        adjacentLocations.push(input[y + 1][x])
      }

      adjacentLocations.push(input[y][x - 1])
      adjacentLocations.push(input[y][x + 1])

      if (isLowest(currentValue, adjacentLocations)) {
        lowest.push(currentValue);
      }
    }
  }


  return lowest.reduce((acc, cur) => acc + cur + 1, 0);
}

export default day091;

