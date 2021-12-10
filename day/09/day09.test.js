const day = require("./index.js");

const testInput = `2199943210
3987894921
9856789892
8767896789
9899965678`;

test("input parses to 5 row 10 column grid", () => {
  const data = day.parseInput(testInput);
  expect(data.length).toBe(5);
  expect(data[0].length).toBe(10);
});

test("star1 test value is 15", () => {
  const lines = day.parseInput(testInput);
  expect(day.star1(lines)).toBe(15);
});

const testGrid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

test("getPoint works for valid point", () => {
  const point = day.getPoint(testGrid, 1, 3);
  expect(point).toBe(8);
});

test("getPoint works for invalid row", () => {
  const point = day.getPoint(testGrid, 3, 3);
  expect(point).toBe(null);
});

test("getPoint works for invalid col", () => {
  const point = day.getPoint(testGrid, 1, 4);
  expect(point).toBe(null);
});

test("getNeighbors", () => {
  const points = day.getNeighbors(testGrid, 1, 1);
  points.sort((a, b) => a - b);
  expect(points).toEqual([2, 5, 7, 10]);
});

test("findBasin size 3", () => {
  const data = day.parseInput(testInput);
  const points = day.findBasin(data, 0, 1);
  //expect(points).toEqual([1, 2, 3]);
  expect(points.length).toBe(3);
});

test("findBasin size 9", () => {
  const data = day.parseInput(testInput);
  const points = day.findBasin(data, 0, 9);
  expect(points.length).toBe(9);
});

test("findBasin size 14", () => {
  const data = day.parseInput(testInput);
  const points = day.findBasin(data, 2, 2);
  expect(points.length).toBe(14);
});

test("findBasin size 9 second point", () => {
  const data = day.parseInput(testInput);
  const points = day.findBasin(data, 4, 6);
  expect(points.length).toBe(9);
});

test("star2 test value is 1134", () => {
  const data = day.parseInput(testInput);
  expect(day.star2(data)).toBe(1134);
});
