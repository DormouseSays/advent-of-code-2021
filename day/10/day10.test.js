const day = require("./index.js");

const testInput = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`;

test("input parses to 10 lines", () => {
  const data = day.parseInput(testInput);
  expect(data.length).toBe(10);
});

test("parsing bad line throws errorr", () => {
  try {
    const result = day.parseLine("{([(<{}[<>[]}>{[]{[(<()>");
  } catch (e) {
    expect(e.expected).toBe("]");
    expect(e.found).toBe("}");
  }
});

test("star1 test value is 26397", () => {
  const lines = day.parseInput(testInput);
  const result = day.star1(lines);
  expect(result).toBe(26397);
});

test("completion string one", () => {
  const str = day.parseLine('[({(<(())[]>[[{[]{<()<>>');
  expect(str).toEqual('}}]])})]');
})

test("completion string two", () => {
  const str = day.parseLine('[(()[<>])]({[<{<<[]>>(');
  expect(str).toEqual(')}>]})');
})

test("completion string three", () => {
  const str = day.parseLine('(((({<>}<{<{<>}{[]{[]{}');
  expect(str).toEqual('}}>}>))))');
})

test("completion string four", () => {
  const str = day.parseLine('{<[[]]>}<{[{[{[]{()[[[]');
  expect(str).toEqual(']]}}]}]}>');
})

test("completion string five", () => {
  const str = day.parseLine('<{([{{}}[<[[[<>{}]]]>[]]');
  expect(str).toEqual('])}>');
})

test("score 1", () => {
  const score = day.scoreCompletionString('}}]])})]');
  expect(score).toEqual(288957);
})

test("score 2", () => {
  const score = day.scoreCompletionString(')}>]})');
  expect(score).toEqual(5566);
})

test("score 3", () => {
  const score = day.scoreCompletionString('}}>}>))))');
  expect(score).toEqual(1480781);
})

test("score 4", () => {
  const score = day.scoreCompletionString(']]}}]}]}>');
  expect(score).toEqual(995444);
})

test("score 5", () => {
  const score = day.scoreCompletionString('])}>');
  expect(score).toEqual(294);
})

test("find score", () => {
  const scores = [288957, 5566, 1480781, 995444, 294];
  const score = day.findScore(scores);
  expect(score).toEqual(288957);
})