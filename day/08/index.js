const utils = require("../../utils.js");

const run = (input) => {
  const data = parseInput(input);
  const value1 = star1(data);
  const value2 = star2(data);

  return `day 08 with ${data.length} lines, star 1 = ${value1}. star 2 = ${value2}.`;
};

const parseInput = (input) => {
  const lines = input.split("\n");
  const values = lines
    .map((l) => l.split(" | "))
    .map((v) => ({ input: v[0], output: v[1] }));
  return values;
};

const star1 = (lines) => {
  const count = lines
    .map((l) => l.output.split(" "))
    .map((l) => l.filter((v) => [2, 4, 3, 7].includes(v.length)).length)
    .reduce((acc, v) => acc + v, 0);
  return count;
};

const findNumbers = (line) => {
  let vals = line.input.split(" ").map((n) => n.split("").sort());

  const one = vals.find((v) => v.length === 2);
  const four = vals.find((v) => v.length === 4);
  const seven = vals.find((v) => v.length === 3);
  const eight = vals.find((v) => v.length === 7);

  let lengthFiveValues = vals.filter((v) => v.length === 5);

  const three = lengthFiveValues.find((v) => one.every((n) => v.includes(n)));
  lengthFiveValues = lengthFiveValues.filter(
    (v) => !v.every((n) => three.includes(n))
  );

  const five = lengthFiveValues.find(
    (v) => v.filter((n) => four.includes(n)).length == 3
  );
  lengthFiveValues = lengthFiveValues.filter(
    (v) => !v.every((n) => five.includes(n))
  );

  const two = lengthFiveValues.pop();

  let lengthSixValues = vals.filter((v) => v.length === 6);
  const six = lengthSixValues.find((v) => !one.every((n) => v.includes(n)));
  lengthSixValues = lengthSixValues.filter(
    (v) => !v.every((n) => six.includes(n))
  );

  const nine = lengthSixValues.find((v) => four.every((n) => v.includes(n)));
  lengthSixValues = lengthSixValues.filter(
    (v) => !v.every((n) => nine.includes(n))
  );

  const zero = lengthSixValues.pop();

  return [
    zero.join(""),
    one.join(""),
    two.join(""),
    three.join(""),
    four.join(""),
    five.join(""),
    six.join(""),
    seven.join(""),
    eight.join(""),
    nine.join(""),
  ];
};

const findValues = (numbers, str) => {
  let vals = str.split(" ").map((n) => n.split("").sort().join(""));

  const digits = vals.map((v) => numbers.findIndex((n) => n === v));
  const result = parseInt(digits.join(""));

  return result;
};

const star2 = (lines) => {
  /*
  unknown numbers:
  0 - not 6 or 9
  2 - not 3 or 5
  3 - from (2,3,5) the number that contains ALL values in 1
  5 - from (2,5) the number with 1 more value from 4 
  6 - from (0,6,9) the number that DOES NOT contain both values in 1
  9 - from (0,9) the number that contains ALL values from 4
  */

  let sum = 0;

  for (const line of lines) {
    const numbers = findNumbers(line);
    const result = findValues(numbers, line.output);

    console.log(`output ${line.output} = ${result}`);

    sum += result;
  }

  return sum;
};

module.exports = { run, parseInput, star1, star2, findNumbers, findValues };
