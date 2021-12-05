const day = require("./index.js");

const testInput = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

test("input parses to 6 lines", () => {
  expect(day.parseInput(testInput).length).toBe(6);
});

test("parsed input has correct values", () => {
  const lines = day.parseInput(testInput);
  expect(typeof lines[0].value).toBe("number");
  expect(lines[5].value).toBe(2);
  expect(lines[5].instruction).toBe('forward');
});

test("star1 value is 150", () => {
  const lines = day.parseInput(testInput);
  expect(day.star1(lines)).toBe(150);
});

test("star2 value is 900", () => {
  const lines = day.parseInput(testInput);
  expect(day.star2(lines)).toBe(900);
});