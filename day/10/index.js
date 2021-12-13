const utils = require("../../utils.js");

class ParseError extends Error {
  constructor(expected, found, location) {
    const message = `Error parsing expression. Expected ${expected} found ${found} at location ${location}`;
    super(message);
    this.name = "ParseError";
    this.expected = expected;
    this.found = found;
    this.location = location;
  }
}

const run = (input) => {
  const data = parseInput(input);
  const value1 = star1(data);
  const value2 = star2(data);

  return `day 10 with ${data.length} lines, star 1 = ${value1}. star 2 = ${value2}.`;
};

const parseInput = (input) => {
  const lines = input.split("\n");
  return lines;
};

const parseLine = (line) => {
  const openGroups = [];
  const symbols = line.split("");

  const symbolMap = { "(": ")", "[": "]", "{": "}", "<": ">" };
  const openSymbols = ["(", "[", "{", "<"];
  const closeSymbols = [")", "]", "}", ">"];
  for (let i = 0; i < symbols.length; i++) {
    if (openSymbols.includes(symbols[i])) {
      openGroups.push(symbols[i]);
    } else if (closeSymbols.includes(symbols[i])) {
      const found = openGroups.pop();

      const expected = symbolMap[found];

      if (!expected) {
        throw new ParseError(openGroups.join("|"), symbols[i], i);
      }

      if (expected !== symbols[i]) {
        throw new ParseError(expected, symbols[i], i);
      }
    } else {
      throw new ParseError("valid symbol", symbols[i], i);
    }
  }

  //fill in missing symbols
  const finalSegment = openGroups
    .map((s) => symbolMap[s])
    .reverse()
    .join("");
  return finalSegment;
};

const star1 = (data) => {
  const scores = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137,
  };

  let sum = 0;
  for (const line of data) {
    try {
      parseLine(line);
    } catch (e) {
      console.log("caught", e);
      sum += scores[e.found];
    }
  }

  return sum;
};

const scoreCompletionString = (str) => {
  const symbols = str.split("");
  const scores = {
    ")": 1,
    "]": 2,
    "}": 3,
    ">": 4,
  };
  let score = 0;
  for (let i = 0; i < symbols.length; i++) {
    score = score * 5;
    score += scores[symbols[i]];
  }
  return score;
};

const findScore = (scores) => {
  const sortedScores = scores.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedScores.length / 2);
  return sortedScores[middleIndex];
};

const star2 = (data) => {
  let scores = [];
  for (const line of data) {
    try {
      const result = parseLine(line);
      const score = scoreCompletionString(result);
      scores.push(score);
    } catch (e) {
      console.log("ignored", e);
    }
  }

  const finalScore = findScore(scores)

  return finalScore;
};

module.exports = {
  run,
  parseInput,
  star1,
  star2,
  parseLine,
  scoreCompletionString,
  findScore,
};
