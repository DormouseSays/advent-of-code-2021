const utils = require("./utils.js");

test("parse int returns numbers", () => {
  const testInput = `1
  2
  3
  4
  5`;

  const input = utils.parseInputToInts(testInput)
  expect(input.length).toBe(5);
  expect(typeof input[0]).toBe('number')
});
