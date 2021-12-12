import AocSuite from "../../aoc-suite";
import day121 from "../day-12-1";

describe('day-12-1', () => {

  test('day-12-1 works for test-input-1', () => {
    const suite = new AocSuite({
      solver: day121,
      inputPath: 'day-12/tests/test-inputs/test-input-1.txt'
    });

    expect(suite.solve()).toBe(10);
  });
  test('day-12-1 works for test-input-2', () => {
    const suite = new AocSuite({
      solver: day121,
      inputPath: 'day-12/tests/test-inputs/test-input-2.txt'
    });

    expect(suite.solve()).toBe(19);
  });
  test('day-12-1 works for test-input-3', () => {
    const suite = new AocSuite({
      solver: day121,
      inputPath: 'day-12/tests/test-inputs/test-input-3.txt'
    });

    expect(suite.solve()).toBe(226);
  });
});
