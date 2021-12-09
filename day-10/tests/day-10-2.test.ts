import AocSuite from "../../aoc-suite";
import day102 from "../day-10-2";

describe('day-10-2', () => {

  test('day-10-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day102,
      inputPath: 'day-10/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(1134);
  });
});
