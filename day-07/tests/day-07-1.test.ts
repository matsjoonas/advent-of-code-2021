import AocSuite from "../../aoc-suite";
import day071 from "../day-07-1";

describe('day-06-1', () => {

  test('day-07-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day071,
      inputPath: 'day-07/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(5934);
  });
});
