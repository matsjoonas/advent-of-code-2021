import AocSuite from "../../aoc-suite";
import day072 from "../day-07-2";

describe('day-07-2', () => {

  test('day-07-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day072,
      inputPath: 'day-07/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(26984457539);
  });
});
