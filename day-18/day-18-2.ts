import parseSnailfishNumber from "./parseSnailfishNumber";
import magnitude from "./magnitude";
import addSnailfishNumbers from "./addSnailfishNumbers";

const day182 = function day182(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n').map(line => parseSnailfishNumber(line));
  
  const inputA = [...input];
  const inputB = [...input];
  const magnitudes: number[] = [];
  inputA.forEach(a => {
    inputB.forEach(b => {
      const sum = addSnailfishNumbers(a, b);
      magnitudes.push(magnitude(JSON.parse(sum.join(''))));
    });
  });

  return magnitudes.sort((a, b) => a - b).pop();
}

export default day182;
