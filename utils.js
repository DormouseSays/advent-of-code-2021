const debug = (...args) => {
  console.log(args.join(", "));
};

const parseInputToInts = (input) => input.split("\n").map((n) => parseInt(n));

const createEmptyArray = (n) => [...Array(n)].map((u) => 0);

const createCountArray = (n) => [...Array(n)].map((u, i) => i);

const mean = (arr) => arr.reduce( (acc, v) => acc + v, 0) / arr.length;

const median = (arr) => {
    const sorted = [...arr].sort( (a,b) => a - b );
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ?  (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

const sumRange = (arr) =>  arr.length === 0 ? 0 : arr.length * ((arr[0] + arr[arr.length - 1]) / 2);

const uniqueBy = (arr, prop) => arr.filter( (v, i) => i === arr.findIndex(o => o[prop] === v[prop]));

module.exports = {
  debug,
  parseInputToInts,
  createEmptyArray,
  createCountArray,
  mean,
  median,
  sumRange,
  uniqueBy
};
