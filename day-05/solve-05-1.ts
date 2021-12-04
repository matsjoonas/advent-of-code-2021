import AocSuite from "../aoc-suite";
import day051 from "./day-05-1";

const suite = new AocSuite({
  solver: day051,
  inputPath: 'day-05/input-05.txt'
});

const answer = suite.solve(true);
