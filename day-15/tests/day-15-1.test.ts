import AocSuite from "../../aoc-suite";
import day151 from "../day-15-1";

describe('day-15-1', () => {

  test('day-15-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day151,
      inputPath: 'day-15/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(40);
  });
});
