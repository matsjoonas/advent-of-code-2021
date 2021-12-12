import AocSuite from "../../aoc-suite";
import day122 from "../day-12-2";

describe('day-12-2', () => {

  test('day-12-2 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day122,
      inputPath: 'day-12/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(36);
  });
  test('day-12-2 works for test-input-2', () => {
    const suite = new AocSuite({
      solver: day122,
      inputPath: 'day-12/tests/test-inputs/test-input-2.txt'
    });

    expect(suite.solve()).toBe(103);
  });
  test('day-12-2 works for test-input-3', () => {
    const suite = new AocSuite({
      solver: day122,
      inputPath: 'day-12/tests/test-inputs/test-input-3.txt'
    });

    expect(suite.solve()).toBe(3509);
  });
});
