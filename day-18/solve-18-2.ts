import AocSuite from "../aoc-suite";
import day182 from "./day-18-2";

const suite = new AocSuite({
  solver: day182,
  inputPath: 'day-18/input-18.txt'
});

const answer = suite.solve(true);
