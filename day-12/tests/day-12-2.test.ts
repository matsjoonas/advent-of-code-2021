import AocSuite from "../../aoc-suite";
import day122 from "../day-12-2";

describe('day-12-2', () => {

  test('day-12-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day122,
      inputPath: 'day-12/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(195);
  });
});
