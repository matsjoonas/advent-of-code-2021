import AocSuite from "../../aoc-suite";
import day231 from "../day-23-1";

describe('day-23-1', () => {

  test('day-23-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day231,
      inputPath: 'day-23/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(590784);
  });
});
