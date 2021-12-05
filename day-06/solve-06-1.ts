import AocSuite from "../aoc-suite";
import day061 from "./day-06-1";

const suite = new AocSuite({
  solver: day061,
  inputPath: 'day-06/input-06.txt'
});

const answer = suite.solve(true);
