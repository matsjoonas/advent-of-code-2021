import CharType from "./CharType";
import charMap from "./charMap";

enum Mode {
  findError,
  autoComplete
}

const checkSyntax = function checkSyntax(line: string[], checkerMode: Mode): string | string[] {
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
      } else if (checkerMode === Mode.findError) {
        syntaxError = currentChar;
        break;
      }
    }
  }
  if (checkerMode === Mode.findError) {
    return syntaxError;
  }

  // @ts-ignore
  const closingChars = openChunks.map(openChar => charMap[openChar].pairsWith);
  return closingChars.reverse();
}

const countPoints = function countPoints(chars: string[]) {
  let totalPoints = 0;
  for (let i = 0; i < chars.length; i++) {
    // @ts-ignore
    const charPoints = charMap[chars[i]].points;
    totalPoints = totalPoints * 5 + charPoints;
  }
  return totalPoints;
}


const day102 = function day102(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')
    .map(line => line.split(''));

  const linePoints: number[] = [];

  input.forEach(line => {
    if (!checkSyntax(line, Mode.findError)) {
      const result = checkSyntax(line, Mode.autoComplete);
      // @ts-ignore
      linePoints.push(countPoints(result));
    }
  });

  return linePoints
    .sort((a, b) => a - b)[Math.floor(linePoints.length / 2)];
}

export default day102;

