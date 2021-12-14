const getPairs = function getPairs(template: string): Map<string, number> {
  return template
    .split('')
    .reduce((map, cur, i, arr) => {
      if (i + 1 < arr.length) {
        const key = arr[i + 1];
        return map.set(cur + key, (map.get(cur + key) || 0) + 1);
      }
      return map;
    }, new Map());
}


const day142 = function day142(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')
    .filter(item => item !== '');

  const template = input.shift() || '';
  // @ts-ignore
  const rules = new Map(input.map(item => item.split(' -> ')));

  let pairs: Map<string, number> = getPairs(template);
  const charCount = template.split('')
    .reduce((map, char) => {
      return map.set(char, (map.get(char) || 0) + 1);
    }, new Map());

  for (let i = 0; i < 40; i++) {
    pairs = [...pairs]
      .map(([pair, count]) => [pair, count, rules.get(pair)])
      .reduce((map, [pair, count, charToInsert]) => {
        charCount.set(charToInsert, (charCount.get(charToInsert) || 0) + count);
        // @ts-ignore
        const pairA = pair[0] + charToInsert;
        // @ts-ignore
        const pairB = charToInsert + pair[1];
        map.set(pairA, (map.get(pairA) || 0) + count);
        map.set(pairB, (map.get(pairB) || 0) + count);

        return map;
      }, new Map());
  }


  const sortedValues = [...charCount.values()].sort((a, b) => b - a);

  return sortedValues[0] - sortedValues[sortedValues.length - 1];
}

export default day142;

