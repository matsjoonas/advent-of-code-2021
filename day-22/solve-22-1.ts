import AocSuite from "../aoc-suite";
import day221 from "./day-22-1";

const suite = new AocSuite({
  solver: day221,
  inputPath: 'day-22/input-22.txt'
});

const answer = suite.solve(true);
