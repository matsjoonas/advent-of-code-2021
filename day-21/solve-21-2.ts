import AocSuite from "../aoc-suite";
import day162 from "./day-21-2";

const suite = new AocSuite({
  solver: day162,
  inputPath: 'day-21/input-21.txt'
});

const answer = suite.solve(true);
