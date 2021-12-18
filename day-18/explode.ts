import Direction from "./Direction";
import isNumber from "./isNumber";
import findNumber from "./findNumber";
import iterateOverSnailfishNumber from "./iterateOverSnailfishNumber";

const explode = function explode(origArr: (string | number)[]) {
  const arr = [...origArr];
  
  let newArr: (string | number)[] = [...arr];
  let haveExplodedPair = false;
  iterateOverSnailfishNumber(arr, (arr: (string | number)[], i: number, level: number) => {
    const char = arr[i];
    if (isNumber(char)) {
      const nextChar1 = arr[i + 1];
      const nextChar2 = arr[i + 2];
      if (nextChar1 === ',' && isNumber(nextChar2) && level === 5 && !haveExplodedPair) {
        // we'e found a pair that needs exploding
        const a = char;
        const b = nextChar2;
        const nextLeftNumber = findNumber(arr, i - 1, Direction.Left);
        const nextRightNumber = findNumber(arr, i + 3, Direction.Right);

        if (nextLeftNumber) {
          // @ts-ignore
          newArr[nextLeftNumber.index] = nextLeftNumber.value + a;
        }

        if (nextRightNumber) {
          // @ts-ignore
          newArr[nextRightNumber.index] = nextRightNumber.value + b;
        }

        // replace the original pair with 0
        newArr = [...newArr.slice(0, i - 1), 0, ...newArr.slice(i + 4)];
        haveExplodedPair = true;
      }
    }
  });

  return {
    arr: newArr,
    hasExploded: haveExplodedPair,
  }
};

export default explode;
