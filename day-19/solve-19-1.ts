import AocSuite from "../aoc-suite";
import day191 from "./day-19-1";

const suite = new AocSuite({
  solver: day191,
  inputPath: 'day-19/input-19.txt'
});

const answer = suite.solve(true);
