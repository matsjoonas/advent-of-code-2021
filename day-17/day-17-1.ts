const day171 = function day171(data: Buffer) {
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
  const maxInitialV = Math.abs(targetLowestY + 1);

  return (maxInitialV * (maxInitialV + 1)) / 2;
}

export default day171;
