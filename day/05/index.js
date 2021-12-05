const utils = require("../../utils.js");

const run = (input) => {
  const data = parseInput(input);
  const value1 = star1(data);

  const data2 = parseInput(input);
  const value2 = star2(data2);

  return `day 05 with ${data.length} lines, star 1 = ${value1}. star 2 = ${value2}.`;
};

const parseInput = (input) => {
  const lines = input.split("\n");

  const points = lines.map((l) =>
    l.split(" -> ").map((p) => p.split(",").map((n) => parseInt(n)))
  );

  return points;
};

const hash = (point) => `${point[0]}_${point[1]}`;

const drawPoint = (points, p) => {
  const pointHash = hash(p);

  if(typeof points[pointHash] === 'number') {
    points[pointHash]++;
  } else {
    points[pointHash] = 1;
  }

  return points;
}

const star1 = (lines, ignoreDiagonal = true) => {
  

  const points = {};

  for(const line of lines) {
    //figure out difference then loop from first to last
    const pointA = line[0];
    const pointB = line[1];

    if(ignoreDiagonal && pointA[0] !== pointB[0] && pointA[1] !== pointB[1]) {
      console.log(`ignoring diagonal from (${pointA[0]},${pointA[1]}) to (${pointB[0]},${pointB[1]})`)
      continue;
    }

    let diffX = 0;
    let diffY = 0;
    if(pointA[0] < pointB[0]) {
      diffX = 1;
    } else if (pointA[0] > pointB[0]) {
      diffX = -1;
    }

    if(pointA[1] < pointB[1]) {
      diffY = 1;
    } else if (pointA[1] > pointB[1]) {
      diffY = -1;
    }

    let drawX = pointA[0];
    let drawY = pointA[1];

    let exit = 0;
    while ((drawX !== pointB[0] || drawY !== pointB[1]) && exit < 9999999) {

      drawPoint(points, [drawX, drawY])

      drawX += diffX;
      drawY += diffY;

      exit++;
    }

    //draw pointB since the loop exited when hitting it
    drawPoint(points, pointB)
  }

  let total = 0;
  for(let p in points) {
    if(points[p] > 1) {
      total++;
    }
  }


  return total;
};

const star2 = (lines) => {
  return star1(lines, false);
};

module.exports = {
  run,
  parseInput,
  star1,
  star2,
};
