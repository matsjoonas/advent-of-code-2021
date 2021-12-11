import AocSuite from "../../aoc-suite";
import day112 from "../day-11-2";

describe('day-11-2', () => {

  test('day-11-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day112,
      inputPath: 'day-11/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(195);
  });
});
