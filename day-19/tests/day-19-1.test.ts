import AocSuite from "../../aoc-suite";
import day191 from "../day-19-1";

describe('day-19-1', () => {

  test('day-19-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day191,
      inputPath: 'day-19/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(3570);
  });
});
