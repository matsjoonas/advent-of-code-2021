import AocSuite from "../aoc-suite";
import day241 from "./day-24-1";

const suite = new AocSuite({
  solver: day241,
  inputPath: 'day-24/input-24.txt'
});

const answer = suite.solve(true);
