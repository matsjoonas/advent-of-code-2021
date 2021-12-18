import AocSuite from "../../aoc-suite";
import day192 from "../day-19-2";

describe('day-19-2', () => {

  test('day-19-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day192,
      inputPath: 'day-19/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(1919);
  });
});
