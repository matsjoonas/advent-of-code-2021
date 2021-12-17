import AocSuite from "../aoc-suite";
import day181 from "./day-18-1";

const suite = new AocSuite({
  solver: day181,
  inputPath: 'day-18/input-18.txt'
});

const answer = suite.solve(true);
