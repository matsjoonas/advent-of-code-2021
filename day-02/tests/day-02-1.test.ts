import AocSuite from "../../aoc-suite";
import day021 from "../day-02-1";

describe('day-02-1', () => {

  test('day-02-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day021,
      inputPath: './day-02/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(7);
  });
});
