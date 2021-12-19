import AocSuite from "../../aoc-suite";
import day121 from "../day-20-1";

describe('day-20-1', () => {

  test('day-20-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day121,
      inputPath: 'day-20/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(1012);
  });
});
