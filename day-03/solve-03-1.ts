import AocSuite from "../aoc-suite";
import day031 from "./day-03-1";

const suite = new AocSuite({
  solver: day031,
  inputPath: './day-03/input-03-1.txt'
});

const answer = suite.solve(true);
