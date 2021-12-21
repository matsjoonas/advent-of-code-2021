const possibleRollSumDistributions = [[3,1], [4,3], [5,6], [6,7], [7,6], [8,3], [9,1]];

const getRoundPosition = function getRoundScore(rollSum: number, startingPosition: number) {
  const position = rollSum + startingPosition;
  if (position % 10 === 0) {
    return 10;
  }
  return position % 10;
}

const round = function round(cache: Map<string, number[]>, pos1: number, pos2: number, score1: number, score2: number) {
  if (score2 >= 21) {
    return [0, 1];
  }

  const cacheKey = [pos1, pos2, score1, score2].join(',');
  const cachedScore = cache.get(cacheKey);
  if (cachedScore) {
    return cachedScore;
  }

  let score: number[] = [0, 0];
  possibleRollSumDistributions.forEach(([rollSum, times]) => {
    const newPos1 = getRoundPosition(rollSum, pos1);
    const subRoundResult = round(cache, pos2, newPos1, score2, score1 + newPos1);

    score[0] = score[0] + (subRoundResult[1] * times);
    score[1] = score[1] + (subRoundResult[0] * times);
  });

  cache.set(cacheKey, score);
  return score;
}

const day212 = function day212(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n').map(line => {
      const chars = line.split('');
      return [chars[chars.length - 2], chars[chars.length - 1]].filter(char => char !== ' ').join('');
    }).map(Number);

  const cache = new Map();
  const finalScore = round(cache, input[0], input[1], 0, 0);

  return Math.max(...finalScore);
}

export default day212;
