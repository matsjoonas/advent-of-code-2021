import AocSuite from "../aoc-suite";
import day102 from "./day-10-2";

const suite = new AocSuite({
  solver: day102,
  inputPath: 'day-10/input-10.txt'
});

const answer = suite.solve(true);
