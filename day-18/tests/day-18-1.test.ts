import AocSuite from "../../aoc-suite";
import day181 from "../day-18-1";

describe('day-18-1', () => {

  test('day-18-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day181,
      inputPath: 'day-18/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(4017);
  });
});
