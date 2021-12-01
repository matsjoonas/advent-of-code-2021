import AocSuite from "../aoc-suite";
import day012 from "./day-01-2";

const suite = new AocSuite({
  solver: day012,
  inputPath: './day-01/input-01-2.txt'
});

const answer = suite.solve(true);
