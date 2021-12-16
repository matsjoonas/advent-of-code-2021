import AocSuite from "../../aoc-suite";
import day162 from "../day-16-2";

describe('day-16-2', () => {

  test('day-16-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day162,
      inputPath: 'day-16/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(2223947372407);
  });
});
