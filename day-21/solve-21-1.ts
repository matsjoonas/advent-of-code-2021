import AocSuite from "../aoc-suite";
import day211 from "./day-21-1";

const suite = new AocSuite({
  solver: day211,
  inputPath: 'day-21/input-21.txt'
});

const answer = suite.solve(true);
