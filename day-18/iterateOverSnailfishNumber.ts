const iterateOverSnailfishNumber = function iterateOverSnailfishNumber(arr: (string | number)[], cb: Function) {

  const level: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    if (char === '[') {
      level.push(char);
    } else if (char === ']') {
      level.pop();
    }
    cb(arr, i, level.length);
  }
}

export default iterateOverSnailfishNumber;
