import AocSuite from "../aoc-suite";
import day162 from "./day-16-2";

const suite = new AocSuite({
  solver: day162,
  inputPath: 'day-16/input-16.txt'
});

const answer = suite.solve(true);
