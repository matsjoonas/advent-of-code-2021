import AocSuite from "../../aoc-suite";
import day081 from "../day-08-1";

describe('day-08-1', () => {

  test('day-08-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day081,
      inputPath: 'day-08/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(26);
  });
});
