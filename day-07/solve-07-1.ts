import AocSuite from "../aoc-suite";
import day071 from "./day-07-1";

const suite = new AocSuite({
  solver: day071,
  inputPath: 'day-07/input-07.txt'
});

const answer = suite.solve(true);
