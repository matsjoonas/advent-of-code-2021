import SubMk1, {Command} from "./sub-mk-1";

const day021 = function day021(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')
    .map((command): Command => {
      const split = command.split(' ');
      return [split[0], split[1]];
    });

  const sub = new SubMk1();
  sub.run(input);

  return sub.x * sub.y;
}

export default day021;

