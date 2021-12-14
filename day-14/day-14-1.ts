const getAllIndexes = function getAllIndexes(str: string, term: string) {
  let index = 0;
  const results = [];
  while (index > -1) {
    index = str.indexOf(term, index);
    if (index !== -1) {
      index++;
      results.push(index);
    }
  }

  return results;
}

const insertStrAt = function insertStrAt(str: string, strToInsert: string, i: number): string {
  return str.slice(0, i) + strToInsert + str.slice(i);
}

const getInsertions = function getInsertions(template: string, rules: string[][]) {
  const insertions: [number, string][] = [];
  rules.forEach(rule => {
    const indexes = getAllIndexes(template, rule[0]);
    indexes.forEach(idx => {
      insertions.push([idx, rule[1]])
    });
  });

  return insertions.sort((a, b) => a[0] - b[0]);
}

const createPolymer = function createPolymer(template: string, rules: string[][]) {
  let newPolymer = template;
  let noOfInsertions = 0;
  const insertions = getInsertions(template, rules);
  insertions.forEach(item => {
    newPolymer = insertStrAt(newPolymer, item[1], item[0] + noOfInsertions);
    noOfInsertions++;
  });

  return newPolymer;
}

const day141 = function day141(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')
    .filter(item => item !== '');

  const template = input.shift() || '';
  const rules = input.map(item => item.split(' -> '));
  let newPolymer = template;

  for (let i = 0; i < 10; i++) {
    newPolymer = createPolymer(newPolymer, rules);
  }

  let prevChar = '';
  let cuts: string[][] = [];
  let cutIndex = 0;
  const workingResult = newPolymer.split('').sort();

  workingResult.forEach((char) => {
    if (prevChar && char !== prevChar) {
      cutIndex++
    }
    if (!cuts[cutIndex]) {
      cuts[cutIndex] = [];
    }
    cuts[cutIndex].push(char);
    prevChar = char;
  });

  const result = cuts.map(item => item.join('')).sort((a, b) => a.length - b.length);

  return result[result.length - 1].length - result[0].length;
}

export default day141;

