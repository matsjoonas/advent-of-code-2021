import AocSuite from "../aoc-suite";
import day162 from "./day-20-2";

const suite = new AocSuite({
  solver: day162,
  inputPath: 'day-20/input-20.txt'
});

const answer = suite.solve(true);
