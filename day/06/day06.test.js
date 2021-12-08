const day = require("./index.js");

const testInput = `3,4,3,1,2`;

test("input parses to 5 numbers", () => {
  const data = day.parseInput(testInput)
  expect(data.length).toBe(5);
  expect(typeof data[0]).toBe('number');
});


test("star1 18 iterations is 26", () => {
  const numbers = day.parseInput(testInput);
  expect(day.star1(numbers, 18)).toBe(26);
});

test("star1 value is 5934", () => {
  const numbers = day.parseInput(testInput);
  expect(day.star1(numbers, 80)).toBe(5934);
});

// test("star2 value is 900", () => {
//   const lines = day.parseInput(testInput);
//   expect(day.star2(lines)).toBe(900);
// });