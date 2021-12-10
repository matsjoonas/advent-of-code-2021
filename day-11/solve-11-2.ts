import AocSuite from "../aoc-suite";
import day112 from "./day-11-2";

const suite = new AocSuite({
  solver: day112,
  inputPath: 'day-11/input-11.txt'
});

const answer = suite.solve(true);
