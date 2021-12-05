const debug = (...args) => {
    console.log(args.join(', '))
}

parseInputToInts = (input) => input.split("\n").map((n) => parseInt(n));

module.exports = {
    debug,
    parseInputToInts
}