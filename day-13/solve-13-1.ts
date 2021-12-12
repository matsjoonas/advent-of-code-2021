import AocSuite from "../aoc-suite";
import day131 from "./day-13-1";

const suite = new AocSuite({
  solver: day131,
  inputPath: 'day-13/input-13.txt'
});

const answer = suite.solve(true);
