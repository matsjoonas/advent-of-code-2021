import tryConvertToNumber from "../tryConvertToNumber";

class Alu {
  private w: number = 0;
  private x: number = 0;
  private y: number = 0;
  private z: number = 0;
  private program: (string | number)[][] = [];

  constructor(program: (string | number)[][]) {
    this.program = program;
  }

  public getState() {
    return {
      w: this.w,
      x: this.x,
      y: this.y,
      z: this.z,
    }
  }

  private isNumber(char: any): boolean {
    return typeof char === 'number';
  }

  private getValue(char: any): number {
    if (this.isNumber(char)) {
      return char;
    }
    // @ts-ignore
    return this[char];
  }

  private inp(a: string, b: string) {
    // @ts-ignore
    this[a] = b;
  }

  private add(a: string | number, b: any) {
    // @ts-ignore
    this[a] = this[a] + this.getValue(b);
  }

  private mul(a: string | number, b: any) {
    // @ts-ignore
    this[a] = this[a] * this.getValue(b);
  }

  private div(a: string | number, b: any) {
    // @ts-ignore
    this[a] = Math.floor(this[a] / this.getValue(b));
  }

  private mod(a: string | number, b: any) {
    // @ts-ignore
    this[a] = this[a] % this.getValue(b);
  }

  private eql(a: string | number, b: any) {
    // @ts-ignore
    this[a] = this[a] === this.getValue(b) ? 1 : 0;
  }


  public run(input: number[]) {
    this.program.forEach(instruction => {
      const currentInput = input.shift();
      // @ts-ignore
      this[instruction[0]](instruction[1], instruction[2] || currentInput)
    });
  }
}

const day241 = function day241(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n').map(line => line.split(' ').map(tryConvertToNumber));

  const alu = new Alu(input);
  alu.run([1, 3]);
  console.log(alu.getState());

  return null;
}

export default day241;
