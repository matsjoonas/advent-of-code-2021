import AocSuite from "../aoc-suite";
import day032 from "./day-03-2";

const suite = new AocSuite({
  solver: day032,
  inputPath: './day-03/input-03-2.txt'
});

const answer = suite.solve(true);
