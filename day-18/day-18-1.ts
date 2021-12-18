const tryToGetNumber = function tryToGetNumber(char: string) {
  const cast = Number(char);
  if (Number.isNaN(cast)) {
    return false;
  }
  return cast;
}


const explode = function explode(str: string) {
  console.log(str);
  const arr = str.split('');
  let level = [];
  for (let i = 0; i < arr.length; i++) {

    const char = arr[i];
    if (char === '[') {
      level.push(char);
    } else if (char === ']') {
      level.pop();
    } else if (tryToGetNumber(char) !== false) {
      const nextChar1 = arr[i + 1];
      const nextChar2 = arr[i + 2];
      if (nextChar1 === ',' && tryToGetNumber(nextChar2) !== false) {
        // we'e found a pair
        const a = tryToGetNumber(char);
        const b = tryToGetNumber(nextChar2);
        console.log(a);
        console.log(b);
        console.log('level: ' + level.length);
        console.log('----------');
      }
    }
  }
};

const day181 = function day181(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n');

  explode('[[[[[9,8],1],2],3],4]');
  explode('[7,[6,[5,[4,[3,2]]]]]');
  explode('[[6,[5,[4,[3,2]]]],1]');
  explode('[[3,[2,[1,[7,3]]]],[6,[5,[4,[3,2]]]]]');
  explode('[[3,[2,[8,0]]],[9,[5,[4,[3,2]]]]]');

  return null;
}

export default day181;
