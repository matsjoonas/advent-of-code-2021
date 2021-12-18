import AocSuite from "../../aoc-suite";
import explode from "../explode";
import parseSnailfishNumber from "../parseSnailfishNumber";

describe('explode', () => {

  test('should not explode [[[[1,2],[3,4]],[[5,6],[7,8]]],9]', () => {
    expect(explode(parseSnailfishNumber('[[[[1,2],[3,4]],[[5,6],[7,8]]],9]')).arr.join('')).toBe('[[[[1,2],[3,4]],[[5,6],[7,8]]],9]');
  });

  test('should not explode [[[[1,2],[3,4]],[[5,6],[7,8]]],9]', () => {
    expect(explode(parseSnailfishNumber('[[[[1,2],[3,4]],[[5,6],[7,8]]],9]')).hasExploded).toBe(false);
  });

  test('works for [[[[[9,8],1],2],3],4]', () => {
    expect(explode(parseSnailfishNumber('[[[[[9,8],1],2],3],4]')).arr.join('')).toBe('[[[[0,9],2],3],4]');
  });

  test('sets hasExploded to true for [[[[[9,8],1],2],3],4]', () => {
    expect(explode(parseSnailfishNumber('[[[[[9,8],1],2],3],4]')).hasExploded).toBe(true);
  });

  test('works for [7,[6,[5,[4,[3,2]]]]]', () => {
    expect(explode(parseSnailfishNumber('[7,[6,[5,[4,[3,2]]]]]')).arr.join('')).toBe('[7,[6,[5,[7,0]]]]');
  });

  test('works for [[6,[5,[4,[3,2]]]],1]', () => {
    expect(explode(parseSnailfishNumber('[[6,[5,[4,[3,2]]]],1]')).arr.join('')).toBe('[[6,[5,[7,0]]],3]');
  });

  test('works for [[3,[2,[1,[7,3]]]],[6,[5,[4,[3,2]]]]]', () => {
    expect(explode(parseSnailfishNumber('[[3,[2,[1,[7,3]]]],[6,[5,[4,[3,2]]]]]')).arr.join('')).toBe('[[3,[2,[8,0]]],[9,[5,[4,[3,2]]]]]');
  });

  test('works for [[3,[2,[8,0]]],[9,[5,[4,[3,2]]]]]', () => {
    expect(explode(parseSnailfishNumber('[[3,[2,[8,0]]],[9,[5,[4,[3,2]]]]]')).arr.join('')).toBe('[[3,[2,[8,0]]],[9,[5,[7,0]]]]');
  });
});
