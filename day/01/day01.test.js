const day01 = require("./index.js");

test("sample input returns 7", () => {
  const testInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
  expect(day01.star1(testInput)).toBe(7);
});

test("all decreasing returns 0", () => {
  const testInput = [10, 9, 8, 7, 6];
  expect(day01.star1(testInput)).toBe(0);
});

test("all equal returns 0", () => {
    const testInput = [3, 3, 3, 3, 3];
    expect(day01.star1(testInput)).toBe(0);
  });

test("all increasing returns array.length - 1", () => {
  const testInput = [1, 2, 3, 4, 5];
  expect(day01.star1(testInput)).toBe(testInput.length - 1);
});


