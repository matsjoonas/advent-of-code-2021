import AocSuite from "../aoc-suite";
import day052 from "./day-05-2";

const suite = new AocSuite({
  solver: day052,
  inputPath: 'day-05/input-05.txt'
});

const answer = suite.solve(true);
