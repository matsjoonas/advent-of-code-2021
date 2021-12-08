import AocSuite from "../aoc-suite";
import day092 from "./day-09-2";

const suite = new AocSuite({
  solver: day092,
  inputPath: 'day-09/input-09.txt'
});

const answer = suite.solve(true);
