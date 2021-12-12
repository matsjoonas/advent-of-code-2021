import AocSuite from "../../aoc-suite";
import day131 from "../day-13-1";

describe('day-13-1', () => {

  test('day-13-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day131,
      inputPath: 'day-13/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(10);
  });
});
