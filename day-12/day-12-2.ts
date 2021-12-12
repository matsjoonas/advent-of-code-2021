const getNextPoints = function getNextPoints(current: string, connections: string[][]) {
  const nextConnections = connections.filter(connection => connection[0] === current || connection[1] === current);
  return nextConnections.map(connection => connection[0] === current ? connection[1] : connection[0]);
}

const isLowerCase = function isLowerCase(char: string): boolean {
  return char === char.toLowerCase();
};

const isValidNextPoint = function isValidNextPoint(point: string, path: string[]): boolean {
  if (point === 'start') {
    return false;
  }
  if (!isLowerCase(point)) {
    return true;
  }

  let isValid = true;

  let duplicateExists = false;

  for (let i = 0; i < path.length; i++) {
    const pathPoint = path[i];
    if (!isLowerCase(pathPoint)) {
      continue;
    }
    const duplicate = path.find((pt, index) => index > i && pt === pathPoint);

    if (duplicate) {
      duplicateExists = true;
    }
  }

  if (duplicateExists) {
    const currentPointDuplicates = path.filter(pathPoint => pathPoint === point);
    if (currentPointDuplicates.length >= 1) {
      isValid = false;
    }
  }

  return isValid;
}

const day122 = function day122(data: Buffer) {
  const connections = data.toString().trim()
    .split('\r\n')
    .map(line => {
      return line
        .split('-');
    });

  let paths: string[][] = [
    ['start'],
  ];
  let i = 0;
  let shouldContinue = true;

  while (shouldContinue) {
    shouldContinue = false;
    i++;
    const workingPaths: string[][] = [];
    paths.forEach(path => {
      const currentPoint = path[path.length - 1];
      if (currentPoint === 'end') {
        workingPaths.push([...path]);
        return;
      }
      // we should continue while there are still paths that do not end with the point 'end'
      shouldContinue = true;
      const nextPoints = getNextPoints(currentPoint, connections);
      nextPoints.forEach(nextPoint => {
        if (!isValidNextPoint(nextPoint, path)) {
          return;
        }
        workingPaths.push([...path, nextPoint]);
      });
    });

    paths = workingPaths;
  }

  return paths.length;
}

export default day122;

