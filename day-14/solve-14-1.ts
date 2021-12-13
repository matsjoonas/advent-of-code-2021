import AocSuite from "../aoc-suite";
import day141 from "./day-14-1";

const suite = new AocSuite({
  solver: day141,
  inputPath: 'day-14/input-14.txt'
});

const answer = suite.solve(true);
