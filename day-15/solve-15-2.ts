import AocSuite from "../aoc-suite";
import day142 from "./day-15-2";

const suite = new AocSuite({
  solver: day142,
  inputPath: 'day-15/input-15.txt'
});

const answer = suite.solve(true);
