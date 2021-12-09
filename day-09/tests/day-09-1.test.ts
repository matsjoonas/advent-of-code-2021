import AocSuite from "../../aoc-suite";
import day091 from "../day-09-1";

describe('day-09-1', () => {

  test('day-09-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day091,
      inputPath: 'day-09/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(15);
  });
});
