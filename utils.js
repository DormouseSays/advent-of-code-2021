const debug = (...args) => {
    console.log(args.join(', '))

const createEmptyArray = (n) => [...Array(n)].map((u) => 0);
}

parseInputToInts = (input) => input.split("\n").map((n) => parseInt(n));

module.exports = {
    debug,
    parseInputToInts
}  createEmptyArray,
};
