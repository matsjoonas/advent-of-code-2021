import AocSuite from "../../aoc-suite";
import day061 from "../day-06-1";

describe('day-06-1', () => {

  test('day-06-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day061,
      inputPath: 'day-06/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(5934);
  });
});
