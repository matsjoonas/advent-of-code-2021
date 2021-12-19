const createTransformers = function createTransformers() {
  const transFunctions: Function[] = [];
  const axisTransforms = [[0, 1, 2],  [0, 2, 1],  [1, 0, 2],  [1, 2, 0],  [2, 0, 1],  [2, 1, 0]];
  const directionTransforms = [[1, 1, 1],  [1, 1, -1],  [1, -1, 1],  [1, -1, -1],  [-1, 1, 1],  [-1, 1, -1],  [-1, -1, 1],  [-1, -1, -1]];
  axisTransforms.forEach(axisTransform => {
    directionTransforms.forEach(directionTransform => {
      const transFunction = (point: [number, number, number]) => {
        return [point[axisTransform[0]], point[axisTransform[1]], point[axisTransform[2]]]
          .map((value, index) => value * directionTransform[index]);
      }
      transFunctions.push(transFunction);
    });
  });
  return transFunctions;
}

const transformers = createTransformers();

export default transformers;
