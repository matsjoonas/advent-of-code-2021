const rollDice = function rollDice(state = {index: 0}) {
  state.index += 1;
  if (state.index > 100) {
    state.index = 1;
  }
  return state.index;
}

const getRoundScore = function getRoundScore(roll: number, space: number) {
  const position = roll + space;
  if (position % 10 === 0) {
    return 10;
  }
  return position % 10;
}

const day211 = function day211(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n').map(line => {
      const chars = line.split('');
      return [chars[chars.length - 2], chars[chars.length - 1]].filter(char => char !== ' ').join('');
    }).map(Number);

  let p1Position = input[0];
  let p1Points = 0;
  let p2Position = input[1];
  let p2Points = 0;
  let winner;
  const state = {index: 0}
  let counter = 0;
  let result;

  while (!winner) {
    const roll = rollDice(state) + rollDice(state) + rollDice(state);
    let roundScore;
    if (counter % 2 === 0) {
      roundScore = getRoundScore(roll, p1Position);
      p1Points += roundScore;
      p1Position = roundScore;
    } else {
      roundScore = getRoundScore(roll, p2Position);
      p2Points += roundScore;
      p2Position = roundScore;
    }

    counter++
    if (p1Points >= 1000 || p2Points >= 1000) {
      let loser = p1Points < p2Points ? p1Points : p2Points;
      result = loser * counter * 3;
      break;
    }
  }


  return result;
}

export default day211;
