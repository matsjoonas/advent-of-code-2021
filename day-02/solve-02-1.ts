import AocSuite from "../aoc-suite";
import day021 from "./day-02-1";

const suite = new AocSuite({
  solver: day021,
  inputPath: './day-02/input-02-1.txt'
});

const answer = suite.solve(true);
