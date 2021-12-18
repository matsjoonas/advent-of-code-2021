import explode from "./explode";

const day181 = function day181(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n');

  explode('[[[[[9,8],1],2],3],4]');
  explode('[7,[6,[5,[4,[3,2]]]]]');
  explode('[[6,[5,[4,[3,2]]]],1]');
  explode('[[3,[2,[1,[7,3]]]],[6,[5,[4,[3,2]]]]]');
  explode('[[3,[2,[8,0]]],[9,[5,[4,[3,2]]]]]');

  return null;
}

export default day181;
