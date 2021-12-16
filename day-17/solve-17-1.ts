import AocSuite from "../aoc-suite";
import day171 from "./day-17-1";

const suite = new AocSuite({
  solver: day171,
  inputPath: 'day-17/input-17.txt'
});

const answer = suite.solve(true);
