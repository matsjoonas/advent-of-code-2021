import AocSuite from "../aoc-suite";
import day172 from "./day-17-2";

const suite = new AocSuite({
  solver: day172,
  inputPath: 'day-17/input-17.txt'
});

const answer = suite.solve(true);
