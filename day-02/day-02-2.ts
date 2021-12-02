import SubMk2, {Command} from "./sub-mk-2";

const day022 = function day022(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n')
    .map((command): Command => {
      const split = command.split(' ');
      return [split[0], split[1]];
    });

  const sub = new SubMk2();
  sub.run(input);

  return sub.x * sub.y;
}

export default day022;
