const utils = require("../../utils.js");

const run = (input) => {
  const data = parseInput(input);
  const value1 = star1(data);
  const value2 = star2(data);

  return `day 10 with ${data.length} lines, star 1 = ${value1}. star 2 = ${value2}.`;
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
    getPoint(grid, row - 1, col - 1),
    getPoint(grid, row - 1, col),
    getPoint(grid, row - 1, col + 1),
    getPoint(grid, row, col + 1),
    getPoint(grid, row + 1, col + 1),
    getPoint(grid, row + 1, col),
    getPoint(grid, row + 1, col - 1),
    getPoint(grid, row, col - 1),
  ].filter((n) => n != null);

  return neighbors;
};

const star1 = (data, steps = 10) => {


  for(let i = 0; i < steps; i++) {
    const flashes = [];

    for(let r = 0; r < data.length; r++) {
      for(let c = 0; c < data[r].length; c++) {
        data[r][c]++;
        if(data[r][c] > 9) {
          flashes.push([r, c]);
        }
      }
    }

    //resolve flashes, shift() each one off the front and push() new flashes onto the end of the array
    // - have to make sure we never push a number that has already flashed this round, should never be possible to resolve more than r * c flashes

    while(flashes.length > 0) {
      current = flashes.shift();


      //need to get valid neighbor r,c, not value, then loop through and update each
      const neighbors = getNeighbors(data, current[0], current[1])

      //push new flashes 
    }
  }


  return 0;
};

const star2 = (data) => {
  return 0;
};

module.exports = {
  run,
  parseInput,
  star1,
  star2,
};
