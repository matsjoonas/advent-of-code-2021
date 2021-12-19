import AocSuite from "../aoc-suite";
import day121 from "./day-20-1";

const suite = new AocSuite({
  solver: day121,
  inputPath: 'day-20/input-20.txt'
});

const answer = suite.solve(true);
