import tryToConvertToNumber from "./tryToConvertToNumber";

const parseSnailfishNumber = function parseSnailfishNumber(str: string) {
  return str.split('').map(char => tryToConvertToNumber(char));
}

export default parseSnailfishNumber;
