import AocSuite from "../aoc-suite";
import day062 from "./day-06-2";

const suite = new AocSuite({
  solver: day062,
  inputPath: 'day-06/input-06.txt'
});

const answer = suite.solve(true);
