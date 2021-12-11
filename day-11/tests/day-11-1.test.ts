import AocSuite from "../../aoc-suite";
import day111 from "../day-11-1";

describe('day-11-1', () => {

  test('day-11-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day111,
      inputPath: 'day-11/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(1656);
  });
});
