const utils = require("../../utils.js");

const run = (input) => {
  const data = parseInput(input);
  const value1 = star1(data);
  const value2 = star2(data);

  return `day 02 with ${data.length} lines, star 1 = ${value1}. star 2 = ${value2}.`;
};

const parseInput = (input) => {
  const lines = input.split("\n");
  const values = lines.map((l) => {
    const parts = l.split(" ");
    return { instruction: parts[0], value: parseInt(parts[1]) };
  });
  return values;
};

const star1 = (lines) => {
  let pos = 0;
  let depth = 0;

  for (const line of lines) {
    if (line.instruction === "forward") {
      pos += line.value;
    } else if (line.instruction === "down") {
      depth += line.value;
    } else if (line.instruction === "up") {
      depth -= line.value;
    }
  }

  console.log(`ended at pos ${pos} and depth ${depth}`);

  return pos * depth;
};

const star2 = (lines) => {
  let pos = 0;
  let depth = 0;
  let aim = 0;

  for (const line of lines) {
    if (line.instruction === "forward") {
      pos += line.value;
      depth += (aim * line.value)
    } else if (line.instruction === "down") {
      aim += line.value;
    } else if (line.instruction === "up") {
      aim -= line.value;
    }
  }

  console.log(`ended at pos ${pos} and depth ${depth}`);

  return pos * depth;
};

module.exports = { run, parseInput, star1, star2 };
