const fs = require("fs").promises;

//entry point, passing in command line arguments
const args = process.argv.slice(2);
main(...args);

async function loadDays() {
  const days = {};
  const folders = await fs.readdir(`${__dirname}/day`);

  for (const folder of folders) {
    const model = require(`${__dirname}/day/${folder}/index.js`);
    days[parseInt(folder)] = model;
  }

  return days;
}

async function runDay(days, day, ...other) {

  if (!days[day]) {
    console.error(`no day ${day} loaded.`);
    return;
  }

  const dayStr = day > 10 ? "" + day : "0" + day;

  console.log(`running day ${day} with input ${`day/${dayStr}/input.txt`}}`);

  const input = await fs.readFile(`day/${dayStr}/input.txt`, "utf8");

  const result = days[day].run(input);

  return result;

}

async function main(day, ...other) {
  const days = await loadDays();

  const dayCount = Object.keys(days).length;

  console.log(`/// --- ECF Advent of Code loaded with ${dayCount} days --- ///`);

  if(day) {
    const result = await runDay(days, day, ...other);
    console.log("result:", result);
  } else {
    for(let d in days) {
      const dayResult = await runDay(days, d, ...other);
      console.log("result:", dayResult);
    }
  }
}
