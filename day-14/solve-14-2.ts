import AocSuite from "../aoc-suite";
import day142 from "./day-14-2";

const suite = new AocSuite({
  solver: day142,
  inputPath: 'day-14/input-14.txt'
});

const answer = suite.solve(true);
