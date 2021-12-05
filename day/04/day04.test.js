const day = require("./index.js");

const testInput = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;

test("input parses to 3 boards and 27 numbers", () => {
  const data = day.parseInput(testInput)
  expect(data.numbers.length).toBe(27);
  expect(data.boards.length).toBe(3);

});

test("input boards are 5x5", () => {
  const data = day.parseInput(testInput)
  expect(data.boards[0].length).toBe(5);
  expect(data.boards[0][0].length).toBe(5);

  expect(typeof data.boards[0][0][0]).toBe('number');

});

test("mark board", () => {
  const board = [
    [1, 2],
    [3, 4]
  ]
  const newBoard = day.markBoard(board, 3);
  expect(newBoard[0][0]).toBe(1);
  expect(newBoard[0][1]).toBe(2);
  expect(newBoard[1][0]).toBe('');
  expect(newBoard[1][1]).toBe(4);
});

test("sum board", () => {
  const board = [
    [1, 2],
    [3, 4]
  ]
  const sum = day.sumBoard(board);
  expect(sum).toBe(10);
});

test("sum board with marked", () => {
  const board = [
    [1, ''],
    ['', 4]
  ]
  const sum = day.sumBoard(board);
  expect(sum).toBe(5);
});

test("board does not win diagonal", () => {
  const board = [
    [1, 2, ''],
    [4, '', 6],
    ['', 8, 9]
  ]
  const win = day.hasBoardWon(board);
  expect(win).toBe(false);
});

test("board wins row", () => {
  const board = [
    [1, 2, 3],
    ['', '', ''],
    [7, 8, 9]
  ]
  const win = day.hasBoardWon(board);
  expect(win).toBe(true);
});

test("board wins column", () => {
  const board = [
    [1, 2, ''],
    [4, 5, ''],
    [7, 8, '']
  ]
  const win = day.hasBoardWon(board);
  expect(win).toBe(true);
});

test("star 1 returns 4512", () => {
  const data = day.parseInput(testInput);
  const value = day.star1(data);
  expect(value).toBe(4512);
});

test("star 2 returns 1924", () => {
  const data = day.parseInput(testInput);
  const value = day.star2(data);
  expect(value).toBe(1924);
});