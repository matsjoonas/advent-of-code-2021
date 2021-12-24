const day231 = function day231(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n');

  const pods = input.slice(2, input.length - 1).map(line => line.split('#').join('').split(' ').join('').split(''));


  // start with gameState and score item array (queue)

  // sort by value and pick first (lowest value) gameState
  // find valid moves for that gameState

  // loop over all the others, get their pos
  // calculate valid moves and costs from that
  // or
  // get tube state and hall state
  // calculate valid moves based on that

  // for each move, update game state and create new queue

  return input;
}

export default day231;
