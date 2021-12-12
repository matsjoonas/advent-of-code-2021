import AocSuite from "../aoc-suite";
import day132 from "./day-13-2";

const suite = new AocSuite({
  solver: day132,
  inputPath: 'day-13/input-13.txt'
});

const answer = suite.solve(true);
