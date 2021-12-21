import AocSuite from "../../aoc-suite";
import day221 from "../day-22-1";

describe('day-22-1', () => {

  test('day-22-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day221,
      inputPath: 'day-22/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(5786);
  });
});
