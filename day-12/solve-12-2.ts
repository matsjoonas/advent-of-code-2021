import AocSuite from "../aoc-suite";
import day122 from "./day-12-2";

const suite = new AocSuite({
  solver: day122,
  inputPath: 'day-12/input-12.txt'
});

const answer = suite.solve(true);
