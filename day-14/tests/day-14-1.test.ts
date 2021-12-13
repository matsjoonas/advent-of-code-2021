import AocSuite from "../../aoc-suite";
import day131 from "../day-14-1";

describe('day-14-1', () => {

  test('day-14-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day131,
      inputPath: 'day-14/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(10);
  });
});
