import AocSuite from "../../aoc-suite";
import day031 from "../day-03-1";

describe('day-03-1', () => {

  test('day-03-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day031,
      inputPath: './day-03/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(150);
  });
});
