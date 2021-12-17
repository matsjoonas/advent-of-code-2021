const dAfterNSteps = function dAfterNSteps(v: number, n: number): number {
  return 0.5 * n * (2 * v - n + 1);
}

const dAfterNStepsForX = function dAfterNStepsForX(v: number, n: number): number {
  if (n > v) {
    n = v;
  }
  return 0.5 * n * (2 * v - n + 1);
}

const day172 = function day172(data: Buffer) {
  const target = data.toString().trim()
    .split('\r\n')[0]
    .split('target area: x=')
    .filter(item => item !== '')[0]
    .split(', y=')
    .map(item => item.split('..').map(Number));

  // velocities for both 0 points at y axis are the same
  // therefore at the second 0 point, the next step would cause the probe
  // to move (initial velocity + 1) distance
  // this means that the max initial velocity has to be one smaller than the distance from 0 to targets lowest y

  // highest point
  // since we are just subtracting 1 at each step we can use the formula
  // for summing n first terms of an arithmetic sequence (from 0 to initial velocity)

  const targetLowestY = target[1][0];
  // max initial Vy
  const Vymax = Math.abs(targetLowestY + 1);
  // max initial Vx
  const Vxmax = Math.abs(target[0][1]);

  const possibleCombinations: string[] = [];

  // get all possible values for Vx - starting velocity
  // get all possible values for Vx - starting velocity
  let startingVy = Vymax;
  for (startingVy; startingVy >= -Vymax - 1; startingVy--) {
    let startingVx = Vxmax;

    for (startingVx; startingVx > 0; startingVx--) {
      let steps = 0;
      let lastDx;
      while (true) {
        const dx = dAfterNStepsForX(startingVx, steps);
        const dy = dAfterNSteps(startingVy, steps);

        // if x is not growing anymore and we are past the lowest y, then there's no point to continue
        if (lastDx === dx && dy < target[1][0]) {
          break;
        }
        lastDx = dx;
        if (dx <= target[0][1] && dx >= target[0][0] && dy <= target[1][1] && dy >= target[1][0]) {
          const velVal = [startingVx, startingVy].join(',');
          if (!possibleCombinations.includes(velVal)) {
            possibleCombinations.push(velVal);
          }
        }

        steps++;
      }
    }
  }

  return possibleCombinations.length;
}

export default day172;
