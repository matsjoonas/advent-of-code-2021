import AocSuite from "../../aoc-suite";
import day232 from "../day-23-2";

describe('day-23-2', () => {

  test('day-23-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day232,
      inputPath: 'day-23/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(2758514936282235);
  });
});
