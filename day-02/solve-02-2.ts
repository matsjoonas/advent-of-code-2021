import AocSuite from "../aoc-suite";
import day022 from "./day-02-2";

const suite = new AocSuite({
  solver: day022,
  inputPath: './day-02/input-02-2.txt'
});

const answer = suite.solve(true);
