import AocSuite from "../../aoc-suite";
import day092 from "../day-09-2";

describe('day-09-2', () => {

  test('day-09-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day092,
      inputPath: 'day-09/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(1134);
  });
});
