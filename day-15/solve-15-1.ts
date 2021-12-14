import AocSuite from "../aoc-suite";
import day141 from "./day-15-1";

const suite = new AocSuite({
  solver: day141,
  inputPath: 'day-15/input-15.txt'
});

const answer = suite.solve(true);
