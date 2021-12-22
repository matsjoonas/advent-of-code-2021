const day222 = function day222(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')
    .map(line => line.split(' ').map((item, index) => {
      if (index !== 1) {
        return item;
      }
      return item.split(',').map(item => item.slice(2).split('..').map(Number));
    }));

  const cubeRanges = [...input];

  const onList = new Map;

  cubeRanges.forEach(line => {
    const action = line[0];
    const cubeRange = line[1];

    const xRange = cubeRange[0];
    const yRange = cubeRange[1];
    const zRange = cubeRange[2];
    // @ts-ignore
    for (let x = xRange[0]; x <= xRange[1]; x++) {
      // @ts-ignore
      for (let y = yRange[0]; y <= yRange[1]; y++) {
        // @ts-ignore
        for (let z = zRange[0]; z <= zRange[1]; z++) {
          const key = [x, y, z].join(',');
          if (action === 'on') {
            onList.set(key, 'on')
          } else {
            onList.delete(key)
          }
        }
      }
    }

  });

  return onList.size;
}

export default day222;
