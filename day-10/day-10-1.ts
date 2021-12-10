import CharType from "./CharType";
import charMap from "./charMap";

const checkSyntax = function checkSyntax(line: string[]) {
  const openChunks = [];
  let syntaxError = '';
  for (let i = 0; i < line.length; i++) {
    const currentChar = line[i];
    // @ts-ignore
    if (charMap[currentChar].type === CharType.Open) {
      openChunks.push(currentChar);
    }
    // @ts-ignore
    if (charMap[currentChar].type === CharType.Close) {
      // @ts-ignore
      if (openChunks[openChunks.length - 1] === charMap[currentChar].pairsWith) {
        openChunks.pop();
      } else {
        syntaxError = currentChar;
        break;
      }
    }
  }
  return syntaxError;
}


const day101 = function day101(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')
    .map(line => line.split(''));

  const errors: string[] = [];

  input.forEach(line => {
    const syntaxError = checkSyntax(line);
    if (syntaxError) {
      errors.push(syntaxError);
    }
  });

  return errors.reduce((acc, cur) => {
    let result = acc;
    if (cur === ')') {
      result += 3;
    } else if (cur === ']') {
      result += 57;
    } else if (cur === '}') {
      result += 1197;
    } else if (cur === '>') {
      result += 25137;
    }
    return result;
  }, 0);
}

export default day101;

