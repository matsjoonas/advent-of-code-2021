interface SubMk2Interface {
  y: number,
  x: number,
  step: Function,
  run: Function,
}

type Command = [string, string];

class SubMk2 implements SubMk2Interface {
  public y: number = 0;
  public x: number = 0;
  public aim: number = 0;

  forward(dX: number): void {
    this.x += dX;
    this.y += (this.aim * dX);
  }

  up(dY: number): void {
    this.aim -= dY;
  }

  down(dY: number): void {
    this.aim += dY;
  }

  public step(action: string, amount: string): void {
    let d = parseInt(amount);

    if (action === 'forward') {
      this.forward(d);
    }

    if (action === 'up') {
      this.up(d);
    }

    if (action === 'down') {
      this.down(d);
    }
  }

  public run(actions: Array<Command>): void {
    actions.forEach(action => this.step(action[0], action[1]))
  }
}

export {Command};
export default SubMk2;
