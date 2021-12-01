import AocSuite from "../aoc-suite";
import day011 from "./day-01-1";

const suite = new AocSuite({
  solver: day011,
  inputPath: './day-01/input-01-1.txt'
});

const answer = suite.solve(true);
