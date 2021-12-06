import AocSuite from "../../aoc-suite";
import day061 from "../day-06-2";

describe('day-06-2', () => {

  test('day-06-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day061,
      inputPath: 'day-06/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(26984457539);
  });
});
