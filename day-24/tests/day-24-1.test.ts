import AocSuite from "../../aoc-suite";
import day241 from "../day-24-1";

describe('day-24-1', () => {

  test('day-24-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day241,
      inputPath: 'day-24/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(590784);
  });
});
