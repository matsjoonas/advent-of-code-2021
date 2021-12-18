import explode from "../explode";
import parseSnailfishNumber from "../parseSnailfishNumber";
import split from "../split";

describe('split', () => {

  test('should work for [[[[0,7],4],[7,[[8,4],9]]],[1,1]]', () => {
    const testInput = parseSnailfishNumber('[[[[0,7],4],[7,[[8,4],9]]],[1,1]]');
    const result = split(explode(testInput).arr).arr.join('');
    expect(result).toBe('[[[[0,7],4],[[7,8],[0,13]]],[1,1]]');
  });

});
