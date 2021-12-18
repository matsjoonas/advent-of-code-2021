import explode from "./explode";

const day181 = function day181(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n');

  console.log(explode('[[3,[2,[1,[7,3]]]],[6,[5,[4,[3,2]]]]]').join(''));


  return null;
}

export default day181;
