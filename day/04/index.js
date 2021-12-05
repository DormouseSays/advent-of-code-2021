const utils = require("../../utils.js");

const CONSTANTS = {
  MARKED: "",
};

const run = (input) => {
  const data = parseInput(input);
  const value1 = star1(data);

  const data2 = parseInput(input);
  const value2 = star2(data2);

  return `day 04 with ${data.length} lines, star 1 = ${value1}. star 2 = ${value2}.`;
};

const parseInput = (input) => {
  const lines = input.split("\n\n");

  const numbers = lines
    .shift()
    .split(",")
    .map((n) => parseInt(n));
  const boards = lines.map((b) => {
    const rows = b.split("\n");
    const board = rows.map((r) =>
      r
        .trim()
        .split(/\s+/)
        .map((n) => parseInt(n))
    );

    return board;
  });

  return { boards, numbers };
};

const markBoard = (board, value) => {
  //   for (let r = 0; r < board.length; r++) {
  //     for (let c = 0; c < board[r].length; c++) {
  //         if(board[r][c] === value) {
  //             board[r][c] = CONSTANTS.MARKED;
  //         }
  //     }
  //   }

  const newBoard = board.map((r) =>
    r.map((n) => (n === value ? CONSTANTS.MARKED : n))
  );

  return newBoard;
};

const sumBoard = (board) => {
  const allNumbers = board
    .reduce((acc, v) => acc.concat(v), [])
    .filter((n) => typeof n === "number");
  const sum = allNumbers.reduce((acc, v) => acc + v, 0);
  return sum;
};

const hasBoardWon = (board) => {
  //check rows
  const rowWin = board.find((r) => typeof r.find((n) => n !== CONSTANTS.MARKED) !== 'number');

  if (rowWin) {
    return true;
  }

  //check columns
  for (let c = 0; c < board[0].length; c++) {
    let win = true;
    for (let r = 0; r < board.length && win; r++) {
      if (board[r][c] !== CONSTANTS.MARKED) {
        win = false;
      }
    }
    if (win) {
      return true;
    }
  }

  return false;
};

const star1 = ({ numbers, boards }) => {
  let winningScore = -1;
  for (let i = 0; i < numbers.length && winningScore < 0; i++) {
      for(let b = 0; b < boards.length && winningScore < 0; b++) {
          boards[b] = markBoard(boards[b], numbers[i]);
          if(hasBoardWon(boards[b])) {
              console.log(`board ${b} won on number ${i}: ${numbers[i]}`)
            const sum = sumBoard(boards[b])
            winningScore = sum * numbers[i];
          }
      }
  }

  return winningScore;
};

const star2 = ({ numbers, boards }) => {

    let boardsRemaining = [...boards];
    let winningScore = -1;
    for (let i = 0; i < numbers.length && winningScore < 0; i++) {
        console.log(`star 2 drawing ${numbers[i]}`)
        for(let b = 0; b < boardsRemaining.length; b++) {
            boardsRemaining[b] = markBoard(boardsRemaining[b], numbers[i]);
        }

        const lastBoard = boardsRemaining[0];

        boardsRemaining = boardsRemaining.filter(b => !hasBoardWon(b));

        if(boardsRemaining.length === 0) {
            console.log('last board', lastBoard)
            winningScore = sumBoard(lastBoard) * numbers[i]
        }

    }
  
    return winningScore;
};

module.exports = {
  run,
  parseInput,
  star1,
  star2,
  markBoard,
  sumBoard,
  hasBoardWon,
};
