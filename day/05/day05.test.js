const day = require("./index.js");

const testInput = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

test("input parses to 10 lines with 2 points", () => {
  const data = day.parseInput(testInput)
  expect(data.length).toBe(10);
  expect(data[0].length).toBe(2); //2 points
  expect(data[0][0].length).toBe(2); //x & y
  expect(typeof data[0][0][0]).toBe('number');

});


test("star 1 returns 5", () => {
  const data = day.parseInput(testInput);
  const value = day.star1(data);
  expect(value).toBe(5);
});

// test("star 2 returns Y", () => {
//   const data = day.parseInput(testInput);
//   const value = day.star2(data);
//   expect(value).toBe(XXXX);
// });