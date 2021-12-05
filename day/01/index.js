const utils = require('../../utils.js')

const run = (input) => {
  const numbers = utils.parseInputToInts(input);

  const increases = star1(numbers);

  const slidingIncreases = star2(numbers);

  return `day 1 got ${increases} increases and ${slidingIncreases} sliding increases`;
};

const star1 = (numbers) => {
  console.log(`day 1 star 1 got ${numbers.length} values`);

  let increases = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) {
      increases++;
    }
  }

  return increases;
};

const star2 = (numbers) => {
  let increases = 0;
  for (let i = 3; i < numbers.length; i++) {
    const sum = numbers[i] + numbers[i - 1] + numbers[i - 2];
    const prevSum = numbers[i - 1] + numbers[i - 2] + numbers[i - 3];

    if (sum > prevSum) {
      increases++;
    }
  }

  return increases;
};

module.exports = { run, star1, star2 };
