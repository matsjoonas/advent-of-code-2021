import AocSuite from "../../aoc-suite";
import day152 from "../day-15-2";

describe('day-15-2', () => {

  test('day-15-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day152,
      inputPath: 'day-15/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(2188189693529);
  });
});
