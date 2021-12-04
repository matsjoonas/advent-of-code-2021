import AocSuite from "../../aoc-suite";
import day031 from "../day-04-1";

describe('day-04-1', () => {

  test('day-04-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day031,
      inputPath: './day-04/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(4512);
  });
});
