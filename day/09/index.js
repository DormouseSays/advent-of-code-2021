const utils = require("../../utils.js");

const run = (input) => {
  const data = parseInput(input);
  const value1 = star1(data);
  const value2 = star2(data);

  return `day 09 with ${data.length} lines, star 1 = ${value1}. star 2 = ${value2}.`;
};

const parseInput = (input) => {
  const lines = input.split("\n");
  const rows = lines.map((l) => l.split("").map((n) => parseInt(n)));
  return rows;
};

const getPoint = (grid, row, col) => {
  if (Array.isArray(grid[row]) && typeof grid[row][col] === "number") {
    return grid[row][col];
  }
  return null;
};

const getNeighbors = (grid, row, col) => {
  const neighbors = [
    getPoint(grid, row - 1, col),
    getPoint(grid, row, col + 1),
    getPoint(grid, row + 1, col),
    getPoint(grid, row, col - 1),
  ].filter((n) => n != null);

  return neighbors;
};

const findLowPoints = (data) => {
  const lowPoints = [];
  for (let r = 0; r < data.length; r++) {
    for (let c = 0; c < data[r].length; c++) {
      neighbors = getNeighbors(data, r, c);
      if (neighbors.every((n) => data[r][c] < n)) {
        lowPoints.push([r, c]);
      }
    }
  }
  return lowPoints;
};

const star1 = (data) => {
  const lowPoints = findLowPoints(data);
  const sum = lowPoints.reduce((acc, v) => acc + data[v[0]][v[1]] + 1, 0);
  return sum;
};

const findBasin = (grid, row, col) => {
  const checks = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const currentPoint = getPoint(grid, row, col);

  let numbers = [ {hash: `${row}_${col}`, val: currentPoint}];

  for(const check of checks) {
    const point = getPoint(grid, row + check[0], col + check[1]);
    if(typeof point === 'number' && point !== 9 && point > currentPoint && !numbers.find(n => n.hash === `${row + check[0]}_${col + check[1]}`)) {
      const newVals = findBasin(grid, row + check[0], col + check[1])
      numbers = utils.uniqueBy([...numbers, ...newVals], 'hash');
    }
  }

  return numbers;
};

const star2 = (data) => {
  const lowPoints = findLowPoints(data);

  let basinSizes = [];
  for (const p of lowPoints) {
    const vals = findBasin(data, p[0], p[1]);
    basinSizes.push(vals.length);
  }

  const topThree = basinSizes.sort( (a,b) => b - a).slice(0, 3);

  const product = topThree.reduce( (acc, v) => acc * v, 1);

  return product;
};

module.exports = { run, parseInput, star1, star2, getPoint, getNeighbors, findBasin };
