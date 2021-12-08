import AocSuite from "../aoc-suite";
import day091 from "./day-09-1";

const suite = new AocSuite({
  solver: day091,
  inputPath: 'day-09/input-09.txt'
});

const answer = suite.solve(true);
