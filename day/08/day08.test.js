const day = require("./index.js");

const testInput = `be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg
fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb
aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea
fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb
dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe
bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef
egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb
gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce`;

test("input parses to 10 lines", () => {
  const data = day.parseInput(testInput)
  expect(data.length).toBe(10);
});


test("star1 test value is 26", () => {
  const lines = day.parseInput(testInput);
  expect(day.star1(lines)).toBe(26);
});

test("calculated values match for each line", () => {
  const lines = day.parseInput(testInput);

  const results = [8394, 9781, 1197, 9361, 4873, 8418, 4548, 1625, 8717, 4315];

  for (let i = 0; i < lines.length; i++) {
    const numbers = day.findNumbers(lines[i]);
    const result = day.findValues(numbers, lines[i].output);

    expect(result).toBe(results[i]);
  }
});

test("star2 test value is 61229", () => {
  const lines = day.parseInput(testInput);
  expect(day.star2(lines)).toBe(61229);
});