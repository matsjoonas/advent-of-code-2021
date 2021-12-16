import AocSuite from "../../aoc-suite";
import day161 from "../day-16-1";

describe('day-16-1', () => {

  test('day-16-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day161,
      inputPath: 'day-16/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(1012);
  });
});
