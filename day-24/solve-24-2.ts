import AocSuite from "../aoc-suite";
import day242 from "./day-24-2";

const suite = new AocSuite({
  solver: day242,
  inputPath: 'day-24/input-24.txt'
});

const answer = suite.solve(true);
