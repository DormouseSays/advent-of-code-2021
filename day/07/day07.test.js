const day = require("./index.js");

const testInput = `16,1,2,0,4,2,7,1,2,14`;

test("input parses to 10 numbers", () => {
  const data = day.parseInput(testInput)
  expect(data.length).toBe(10);
  expect(typeof data[0]).toBe('number');
});


test("star1 test value is 37", () => {
  const numbers = day.parseInput(testInput);
  expect(day.star1(numbers)).toBe(37);
});

test("star2 test value is 168", () => {
  const numbers = day.parseInput(testInput);
  expect(day.star2(numbers)).toBe(168);
});