import AocSuite from "../../aoc-suite";
import day132 from "../day-14-2";

describe('day-14-2', () => {

  test('day-14-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day132,
      inputPath: 'day-14/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(2188189693529);
  });
});
