import AocSuite from "../../aoc-suite";
import explode from "../explode";

describe('explode', () => {

  test('works for [[[[[9,8],1],2],3],4]', () => {
    expect(explode('[[[[[9,8],1],2],3],4]').join('')).toBe('[[[[0,9],2],3],4]');
  });

  test('works for [7,[6,[5,[4,[3,2]]]]]', () => {
    expect(explode('[7,[6,[5,[4,[3,2]]]]]').join('')).toBe('[7,[6,[5,[7,0]]]]');
  });

  test('works for [[6,[5,[4,[3,2]]]],1]', () => {
    expect(explode('[[6,[5,[4,[3,2]]]],1]').join('')).toBe('[[6,[5,[7,0]]],3]');
  });

  test('works for [[3,[2,[1,[7,3]]]],[6,[5,[4,[3,2]]]]]', () => {
    expect(explode('[[3,[2,[1,[7,3]]]],[6,[5,[4,[3,2]]]]]').join('')).toBe('[[3,[2,[8,0]]],[9,[5,[4,[3,2]]]]]');
  });

  test('works for [[3,[2,[8,0]]],[9,[5,[4,[3,2]]]]]', () => {
    expect(explode('[[3,[2,[8,0]]],[9,[5,[4,[3,2]]]]]').join('')).toBe('[[3,[2,[8,0]]],[9,[5,[7,0]]]]');
  });
});
