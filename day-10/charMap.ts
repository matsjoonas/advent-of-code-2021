import CharType from "./CharType";

const charMap = {
  '[': {
    type: CharType.Open,
    pairsWith: ']',
  },
  ']': {
    type: CharType.Close,
    pairsWith: '[',
    points: 2,
  },
  '{': {
    type: CharType.Open,
    pairsWith: '}',
  },
  '}': {
    type: CharType.Close,
    pairsWith: '{',
    points: 3,
  },
  '<': {
    type: CharType.Open,
    pairsWith: '>',
  },
  '>': {
    type: CharType.Close,
    pairsWith: '<',
    points: 4,
  },
  '(': {
    type: CharType.Open,
    pairsWith: ')',
  },
  ')': {
    type: CharType.Close,
    pairsWith: '(',
    points: 1,
  }
}

export default charMap;
