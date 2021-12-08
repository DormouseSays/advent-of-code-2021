const utils = require("../../utils.js");

const run = (input) => {
  const data = parseInput(input);
  const value1 = star1(data);
  const value2 = star2(data);

  return `day 06 with ${data.length} lines, star 1 = ${value1}. star 2 = ${value2}.`;
};

const parseInput = (input) => {
  const numbers = input.split(",");
  const values = numbers.map((l) => parseInt(l));
  return values;
};

const star1 = (numbers, days = 80) => {

  let fishCounts = utils.createEmptyArray(9).map(i => 0);


  for(const n of numbers) {
    fishCounts[n]++;
  }

  for(let i = 0; i < days; i++) {

    const newFish = fishCounts.shift();
    fishCounts[6] += newFish;
    fishCounts[8] = newFish;

    const sum = fishCounts.reduce( (acc, v) => acc + v, 0)
    console.log(`day ${i} has ${sum} fish.`)
  }

  const finalSum = fishCounts.reduce( (acc, v) => acc + v, 0)

  return finalSum;
};

const star2 = (numbers) => {

  return star1(numbers, 256);
};

module.exports = { run, parseInput, star1, star2 };
