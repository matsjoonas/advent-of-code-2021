import AocSuite from "../../aoc-suite";
import day011 from "../day-01-1";

describe('day-01', () => {

  test('day-01 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day011,
      inputPath: './day-01/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(7);
  });
});
