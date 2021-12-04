function checkIfWon(boards: string[][][], winningNumbers: string[]): any {
  const hits: number[][] = [];
  let winningBoards = new Map();
  let calledNumbers = [];
  let lastToWinBoard;

  loop1:
    for (let numberIndex = 0; numberIndex < winningNumbers.length; numberIndex++) {
      calledNumbers.push(winningNumbers[numberIndex]);
      for (let boardIndex = 0; boardIndex < boards.length; boardIndex++) {
        const board = boards[boardIndex];
        for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
          const row = board[rowIndex];

          for (let itemIndex = 0; itemIndex < row.length; itemIndex++) {
            const item = row[itemIndex];
            if (item === winningNumbers[numberIndex]) {
              if (!hits[boardIndex]) {
                hits[boardIndex] = [];
              }
              if (!hits[boardIndex][rowIndex]) {
                hits[boardIndex][rowIndex] = 0;
              }
              if (!hits[boardIndex][itemIndex + 5]) {
                hits[boardIndex][itemIndex + 5] = 0;
              }

              hits[boardIndex][rowIndex]++
              hits[boardIndex][itemIndex + 5]++

              if (hits[boardIndex][rowIndex] >= 5 || hits[boardIndex][itemIndex + 5] >= 5) {
                if (!winningBoards.get(board)) {
                  winningBoards.set(board, board);
                }
                if (winningBoards.size === boards.length) {
                  lastToWinBoard = board;
                  break loop1;
                }
              }
            }
          }
        }
      }
    }

  return {
    lastToWinBoard,
    calledNumbers,
  };
}


const day042 = function day042(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n');

  const winningNumbers = input.shift()!.split(',');
  const rawBoards = input.filter(item => item !== '')
    .map(line => {
      return line.split(' ').filter(item => item !== '');
    });

  const rowsPerBoard = 5;

  const boards: string[][][] = [];
  let boardIndex = 0;

  for (let rowIndex = 0; rowIndex < rawBoards.length; rowIndex++) {
    const row = rawBoards[rowIndex];
    if (!boards[boardIndex]) {
      boards[boardIndex] = [];
    }
    // @ts-ignore
    boards[boardIndex].push(row);

    if (rowIndex !== 0 && ((rowIndex + 1) % rowsPerBoard === 0)) {
      boardIndex++;
    }
  }

  const result = checkIfWon(boards, winningNumbers);
  const unmarkedNumbers = result.lastToWinBoard
    .flat()
    .filter((number: any) => !result.calledNumbers.includes(number));

  const sum = unmarkedNumbers.reduce((acc: number, cur: string) => {
    return acc + parseInt(cur);
  }, 0)

  const lastCalled = result.calledNumbers.slice(-1)[0];

  return sum * lastCalled;
}

export default day042;
