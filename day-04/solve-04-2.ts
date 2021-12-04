import AocSuite from "../aoc-suite";
import day042 from "./day-04-2";

const suite = new AocSuite({
  solver: day042,
  inputPath: './day-04/input-04-2.txt'
});

const answer = suite.solve(true);
