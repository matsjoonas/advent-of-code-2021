import AocSuite from "../../aoc-suite";
import day132 from "../day-13-2";

describe('day-13-2', () => {

  test('day-13-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day132,
      inputPath: 'day-13/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(36);
  });
});
