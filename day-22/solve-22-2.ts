import AocSuite from "../aoc-suite";
import day222 from "./day-22-2";

const suite = new AocSuite({
  solver: day222,
  inputPath: 'day-22/input-22.txt'
});

const answer = suite.solve(true);
