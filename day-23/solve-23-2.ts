import AocSuite from "../aoc-suite";
import day232 from "./day-23-2";

const suite = new AocSuite({
  solver: day232,
  inputPath: 'day-23/input-23.txt'
});

const answer = suite.solve(true);
