import AocSuite from "../aoc-suite";
import day041 from "./day-04-1";

const suite = new AocSuite({
  solver: day041,
  inputPath: './day-04/input-05.txt'
});

const answer = suite.solve(true);
