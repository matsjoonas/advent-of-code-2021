import AocSuite from "../aoc-suite";
import day161 from "./day-16-1";

const suite = new AocSuite({
  solver: day161,
  inputPath: 'day-16/input-16.txt'
});

const answer = suite.solve(true);
