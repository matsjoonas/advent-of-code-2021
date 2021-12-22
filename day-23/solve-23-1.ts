import AocSuite from "../aoc-suite";
import day231 from "./day-23-1";

const suite = new AocSuite({
  solver: day231,
  inputPath: 'day-23/input-23.txt'
});

const answer = suite.solve(true);
