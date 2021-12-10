const utils = require("./utils.js");

test("parse int returns numbers", () => {
  const testInput = `1
  2
  3
  4
  5`;

  const input = utils.parseInputToInts(testInput);
  expect(input.length).toBe(5);
  expect(typeof input[0]).toBe("number");
});

// [16,1,2,0,4,2,7,1,2,14];

test("mean returns correct mean", () => {
  const testNumbers = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

  const input = utils.mean(testNumbers);
  expect(input).toBe(4.9);
});

test("mean returns correct mean for odd number of items", () => {
  const testNumbers = [1, 2, 3];

  const input = utils.mean(testNumbers);
  expect(input).toBe(2);
});

test("median returns correct median", () => {
  const testNumbers = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

  const input = utils.median(testNumbers);
  expect(input).toBe(2);
});

test("sumRange handles ranges skipping values", () => {
  const testNumbers = [10, 15, 20, 25, 30];

  const realValue = 10 + 15 + 20 + 25 + 30;

  const val = utils.sumRange(testNumbers);
  expect(val).toBe(realValue);
});

test("sumRange handles direct ranges", () => {
  const testNumbers = [1, 2, 3, 4, 5, 6];

  const realValue = 1 + 2 + 3 + 4 + 5 + 6;

  const val = utils.sumRange(testNumbers);
  expect(val).toBe(realValue);
});

test("uniqueBy name", () => {
  const vals = [
    { id: 1, name: "alice" },
    { id: 2, name: "bob" },
    { id: 3, name: "alice" },
    { id: 4, name: "claire" },
    { id: 5, name: "alice" },
  ];

  const results = utils.uniqueBy(vals, 'name');

  expect(results.length).toBe(3);
});
