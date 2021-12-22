import AocSuite from "../../aoc-suite";
import day162 from "../day-21-2";

describe('day-21-2', () => {

  test('day-21-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day162,
      inputPath: 'day-21/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(444356092776315);
  });
});
