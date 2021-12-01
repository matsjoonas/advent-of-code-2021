import * as fs from 'fs';
import 'colors';
import path from "path";

class AocSuite {
  public solver: (data: string | Buffer) => string;
  private readonly inputPath: string;

  constructor(config: any) {
    this.solver = config.solver;
    this.inputPath = config.inputPath;
  }

  solve(log: boolean = false): number | string {
    const data = fs.readFileSync(this.inputPath);
    const answer = this.solver(data);
    if (log) {
      console.log('__________________________________'.blue);
      console.log('The answer is: ')
      console.log(answer);
    }
    return answer;
  }
}

export default AocSuite;
