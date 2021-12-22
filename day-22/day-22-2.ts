import cubesIntersection from "./cubesIntersection";

const volume = function volume(cube: number[][]) {
  return (Math.abs(cube[0][0] - cube[0][1]) + 1)
    * (Math.abs(cube[1][0] - cube[1][1]) + 1)
    * (Math.abs(cube[2][0] - cube[2][1]) + 1);
}

const day222 = function day222(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')
    .map(line => line.split(' ').map((item, index) => {
      if (index === 0) {
        return item === 'on' ? 1 : -1;
      }
      return item.split(',').map(item => item.slice(2).split('..').map(Number));
    }));

  const cubeRanges = [...input];
  let parsedCubes: any[][] = [];

  cubeRanges.forEach(cubeRange => {
    if (!parsedCubes.length) {
      parsedCubes.push([...cubeRange]);
      return;
    }

    const newCubes: (number | number[][] | null)[][] = [];
    parsedCubes.forEach(parsedCube => {
      const action = parsedCube[0] * -1;
      const intersection = cubesIntersection(parsedCube[1], cubeRange[1]);
      if (intersection) {
        newCubes.push([action, intersection]);
      }
    });
    parsedCubes = [
      ...parsedCubes,
      ...newCubes,
    ]
    if (cubeRange[0] === 1) {
      parsedCubes.push(cubeRange);
    }
  });


  return parsedCubes.reduce((acc, cube) => {
    return acc + (volume(cube[1]) * cube[0]);
  }, 0);
}

export default day222;
