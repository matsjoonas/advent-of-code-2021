import AocSuite from "../aoc-suite";
import day111 from "./day-11-1";

const suite = new AocSuite({
  solver: day111,
  inputPath: 'day-11/input-11.txt'
});

const answer = suite.solve(true);
