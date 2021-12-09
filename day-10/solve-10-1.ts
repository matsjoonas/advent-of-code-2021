import AocSuite from "../aoc-suite";
import day101 from "./day-10-1";

const suite = new AocSuite({
  solver: day101,
  inputPath: 'day-10/input-10.txt'
});

const answer = suite.solve(true);
