import AocSuite from "../../aoc-suite";
import day172 from "../day-17-2";

describe('day-17-2', () => {

  test('day-17-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day172,
      inputPath: 'day-17/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(2223947372407);
  });
});
