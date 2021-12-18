import iterateOverSnailfishNumber from "./iterateOverSnailfishNumber";
import isNumber from "./isNumber";

const split = function split(origArr: (string | number)[]) {
  const arr = [...origArr];

  let newArr: (string | number)[] = [...arr];
  let hasSplit = false;
  iterateOverSnailfishNumber(arr, (arr: (string | number)[], i: number, level: number) => {
    const char = arr[i];
    if (isNumber(char) && char >= 10 && !hasSplit) {
      // lets split the number
      // @ts-ignore
      const leftNumber = Math.floor(char / 2);
      // @ts-ignore
      const rightNumber = Math.ceil(char / 2);
      const pair = ['[', leftNumber, ',', rightNumber, ']'];
      newArr = [...newArr.slice(0, i), ...pair, ...newArr.slice(i + 1)];
      hasSplit = true;
    }
  });

  return {
    arr: newArr,
    hasSplit: hasSplit,
  }
}

export default split;
