import add from "./add";
import explode from "./explode";
import split from "./split";

const addSnailfishNumbers = function addSnailfishNumbers(a:  (string | number)[], b:  (string | number)[]) {
  let arr = add(a, b);
  let tryToReduce = true;
  let iterations = 1;
  while (tryToReduce) {
    //console.log('------- new step -----------');
    //console.log(arr.join(''));
    let tryToExplode = true;
    while (tryToExplode) {
      const exploded = explode(arr);
      arr = exploded.arr;
      //console.log('--------- explode --------');
      //console.log(arr.join(''));
      // no explosions anymore, no point in trying to keep exploding
      if (!exploded.hasExploded) {
        tryToExplode = false;
      }
    }
    const splitResult = split(arr);
    arr = splitResult.arr;
    //console.log('------- split ----------');
    //console.log(arr.join(''));
    if (!splitResult.hasSplit) {
      tryToReduce = false;
    }
  }
  return arr;
}

export default addSnailfishNumbers;
