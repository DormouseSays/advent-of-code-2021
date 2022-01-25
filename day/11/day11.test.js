const day = require("./index.js");

const testInput = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

test("input parses to 10 rows 10 cols", () => {
  const data = day.parseInput(testInput);
  expect(data.length).toBe(10);
  expect(data[0].length).toBe(10);
  expect(typeof data[0][0]).toBe('number')
});
