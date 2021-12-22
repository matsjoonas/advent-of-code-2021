const rangeIntersection = function rangeIntersection(a: number[], b: number[]) {
  const min = a[0] < b[0] ? a : b;
  const max = min === a ? b : a;
  if (min[1] < max[0]) {
    return null;
  }

  return [max[0], min[1] < max[1] ? min[1] : max[1]];
};

export default rangeIntersection;
