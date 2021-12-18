import Direction from "./Direction";
import tryToGetNumber from "./tryToGetNumber";

const findNumber = function findNumber(arr: (string | number)[], i: number, mode: Direction) {
  let mayBeNumber: number | boolean = false;
  if (mode === Direction.Left) {
    for (i; i >= 0; i--) {
      mayBeNumber = tryToGetNumber(arr[i]);
      if (mayBeNumber !== false) {
        break;
      }
    }
  } else if (mode === Direction.Right) {
    for (i; i <= arr.length; i++) {
      mayBeNumber = tryToGetNumber(arr[i]);
      if (mayBeNumber !== false) {
        break;
      }
    }
  }

  if (mayBeNumber !== false) {
    return {
      value: mayBeNumber,
      index: i,
    }
  }
  return mayBeNumber;
}

export default findNumber;
