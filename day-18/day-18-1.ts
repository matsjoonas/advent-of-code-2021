import parseSnailfishNumber from "./parseSnailfishNumber";
import magnitude from "./magnitude";
import addSnailfishNumbers from "./addSnailfishNumbers";

const day181 = function day181(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n').map(line => parseSnailfishNumber(line));
  const result = input.reduce((acc, cur) => {
    if (!acc.length) {
      return cur;
    }
    return addSnailfishNumbers(acc, cur);
  }, []);

  return magnitude(JSON.parse(result.join('')));
}

export default day181;
