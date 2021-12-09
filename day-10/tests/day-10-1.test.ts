import AocSuite from "../../aoc-suite";
import day101 from "../day-10-1";

describe('day-10-1', () => {

  test('day-10-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day101,
      inputPath: 'day-10/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(15);
  });
});
