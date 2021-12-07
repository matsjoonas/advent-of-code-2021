import AocSuite from "../aoc-suite";
import day081 from "./day-08-1";

const suite = new AocSuite({
  solver: day081,
  inputPath: 'day-08/input-08.txt'
});

const answer = suite.solve(true);
