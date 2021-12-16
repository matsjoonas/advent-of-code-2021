import AocSuite from "../../aoc-suite";
import day171 from "../day-17-1";

describe('day-17-1', () => {

  test('day-17-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day171,
      inputPath: 'day-17/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(1012);
  });
});
