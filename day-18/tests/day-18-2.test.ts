import AocSuite from "../../aoc-suite";
import day182 from "../day-18-2";

describe('day-18-2', () => {

  test('day-18-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day182,
      inputPath: 'day-18/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(4583);
  });
});
