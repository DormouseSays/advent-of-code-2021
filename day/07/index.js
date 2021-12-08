const utils = require("../../utils.js");

const run = (input) => {
  const data = parseInput(input);
  const value1 = star1(data);
  const value2 = star2(data);

  return `day 07 with ${data.length} lines, star 1 = ${value1}. star 2 = ${value2}.`;
};

const parseInput = (input) => {
  const numbers = input.split(",");
  const values = numbers.map((l) => parseInt(l));
  return values;
};

const findFuelCost = (arr, target) => arr.map(n => Math.abs(n - target)).reduce( (acc, v) => acc + v, 0);

const findAdvancedFuelCost = (arr, target) => arr.map(n => Math.abs(n - target)).map(n => utils.sumRange(utils.createCountArray(n).map(n => n + 1))).reduce( (acc, v) => acc + v, 0);

const star1 = (numbers) => {
  const median = utils.median(numbers);
  const medianFuelCost = findFuelCost(numbers, median);
  return medianFuelCost;
};

const star1BruteForce = (numbers) => {
  const median = utils.median(numbers);

  const max = Math.max(...numbers);

  const medianFuelCost = findFuelCost(numbers, median);

  console.log(`median spot fuel cost = ${medianFuelCost}`)

  let lowestCost = Number.MAX_SAFE_INTEGER;
  for(let i = 0; i < max; i++) {
    const fuelCostI = findFuelCost(numbers, i);

    if(fuelCostI < lowestCost) {
      lowestCost = fuelCostI;
    }
  }

  if(medianFuelCost === lowestCost) {
    console.log('the lowest fuel cost is the median position.') //is this gauranteed to be true?
  }

  return lowestCost;
};

const star2 = (numbers) => {
  const mean = Math.round(utils.mean(numbers));
  const meanFuelCost = findAdvancedFuelCost(numbers, mean);
  return meanFuelCost;
};

const star2BruteForce = (numbers) => {

  const mean = utils.mean(numbers);

  const max = Math.max(...numbers);

  const meanFuelCost = findAdvancedFuelCost(numbers, mean);

  console.log(`mean spot fuel cost = ${meanFuelCost}`)

  let lowestCost = Number.MAX_SAFE_INTEGER;
  for(let i = 0; i < max; i++) {
    const fuelCostI = findAdvancedFuelCost(numbers, i);

    if(fuelCostI < lowestCost) {
      lowestCost = fuelCostI;
    }
  }

  if(meanFuelCost === lowestCost) {
    console.log('the lowest fuel cost is the mean position.') //is this gauranteed to be true?
  }

  return lowestCost;
};

module.exports = { run, parseInput, star1, star2 };
