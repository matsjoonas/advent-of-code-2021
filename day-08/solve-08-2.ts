import AocSuite from "../aoc-suite";
import day082 from "./day-08-2";

const suite = new AocSuite({
  solver: day082,
  inputPath: 'day-08/input-08.txt'
});

const answer = suite.solve(true);
