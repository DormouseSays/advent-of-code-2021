const utils = require("../../utils.js");

const run = (input) => {
  const data = parseInput(input);

  const value1 = star1(data);

  const value2 = star2(data);
  
  return `day 03 star 1 = ${value1} and star 2 = ${value2}`;
};

const parseInput = (input) => {
  const lines = input.split('\n');
  return lines;
};

const star1 = (lines) => {

  const lineLength = lines[0].length;
  const midpoint = Math.floor(lines.length / 2);

  //count all 1s in position
  const oneCounts = [...Array(lineLength)].map( (u, i) => lines.filter(l => l[i] === '1').length  )


  const gammaString = oneCounts.map(count => count > midpoint ? 1 : 0 ).join('');
  const epsilonString = oneCounts.map(count => count > midpoint ? 0 : 1 ).join('');

  const gamma = parseInt(gammaString, 2);
  const epsilon = parseInt(epsilonString, 2);

  return gamma * epsilon;
};

const star2 = (lines) => {
  const oxygenRating = filterLines(lines, 'most');
  const c02Rating = filterLines(lines, 'least');

  console.log(`star2 got oxygen ${oxygenRating} and c02 ${c02Rating}.`)

  return oxygenRating * c02Rating;
};

/**
 * 
 * @param {Array} sentLines - lines of binary strings
 * @param {String} criteria - most|least
 */
const filterLines = (sentLines, criteria) => {
  let lines = [...sentLines];
  const lineLength = lines[0].length;

  for(let i = 0; i < lineLength && lines.length > 1; i++) {
    const oneCount = lines.filter(l => l[i] === '1').length;
    const zeroCount = lines.length - oneCount;
    let search = '0';
    if( (criteria === 'most' && oneCount >= zeroCount) || (criteria === 'least' && oneCount < zeroCount ) ) {
      search = '1';
    }
    lines = lines.filter(l => l[i] === search);
  }

  const result = parseInt(lines[0], 2);

  return result;

}

module.exports = { run, parseInput, star1, star2 };
