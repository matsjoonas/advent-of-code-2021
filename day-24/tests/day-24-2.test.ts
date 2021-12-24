import AocSuite from "../../aoc-suite";
import day242 from "../day-24-2";

describe('day-24-2', () => {

  test('day-24-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day242,
      inputPath: 'day-24/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(2758514936282235);
  });
});
