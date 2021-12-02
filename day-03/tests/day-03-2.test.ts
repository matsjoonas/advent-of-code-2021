import AocSuite from "../../aoc-suite";
import day011 from "../day-03-2";

describe('day-03-2', () => {

  test('day-03-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day011,
      inputPath: './day-03/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(900);
  });
});
