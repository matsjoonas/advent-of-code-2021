import AocSuite from "../aoc-suite";
import day072 from "./day-07-2";

const suite = new AocSuite({
  solver: day072,
  inputPath: 'day-07/input-07.txt'
});

const answer = suite.solve(true);
