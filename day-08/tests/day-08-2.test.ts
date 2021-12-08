import AocSuite from "../../aoc-suite";
import day082 from "../day-08-2";

describe('day-08-2', () => {

  test('day-08-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day082,
      inputPath: 'day-08/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(61229);
  });
});
