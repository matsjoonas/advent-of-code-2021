import parseSnailfishNumber from "../parseSnailfishNumber";
import add from "../add";

describe('add', () => {

  test('add work for [1,2] and [[3,4],5]', () => {
    const a = parseSnailfishNumber('[1,2]');
    const b = parseSnailfishNumber('[[3,4],5]');

    const result = add(a, b);
    expect(result.join('')).toBe('[[1,2],[[3,4],5]]');
  });

});
