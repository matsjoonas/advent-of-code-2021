import AocSuite from "../aoc-suite";
import day192 from "./day-19-2";

const suite = new AocSuite({
  solver: day192,
  inputPath: 'day-19/input-19.txt'
});

const answer = suite.solve(true);
