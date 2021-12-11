import AocSuite from "../aoc-suite";
import day121 from "./day-12-1";

const suite = new AocSuite({
  solver: day121,
  inputPath: 'day-12/input-12.txt'
});

const answer = suite.solve(true);
