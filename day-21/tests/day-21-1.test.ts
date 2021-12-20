import AocSuite from "../../aoc-suite";
import day211 from "../day-21-1";

describe('day-21-1', () => {

  test('day-21-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day211,
      inputPath: 'day-21/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(5786);
  });
});
