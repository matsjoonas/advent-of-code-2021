import AocSuite from "../../aoc-suite";
import day222 from "../day-22-2";

describe('day-22-2', () => {

  test('day-22-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day222,
      inputPath: 'day-22/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(16757);
  });
});
