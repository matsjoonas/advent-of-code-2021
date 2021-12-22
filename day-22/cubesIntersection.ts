import rangeIntersection from "../rangeIntersection";
const cubesIntersection = function cubesIntersection(a: string | any[], b: number | number[][]) {
  const intersection = [];
  for (let i = 0; i < a.length; i++) {
    // @ts-ignore
    const singleIntersection = rangeIntersection(a[i], b[i]);
    if (!singleIntersection) {
      return null;
    }
    intersection[i] = singleIntersection;
  }

  return intersection;
}

export default cubesIntersection;
