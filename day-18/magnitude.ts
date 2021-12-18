const magnitude = function magnitude(arr: any[]): number {
  if (!Array.isArray(arr)) {
    return arr;
  }
  return 3 * magnitude(arr[0]) + 2 * magnitude(arr[1]);
}

export default magnitude;
