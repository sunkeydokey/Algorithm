const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
    124
    25
    194`
).split('\n');

const numberOfCases = input[0];
const quarter = 25;
const dime = 10;
const nickel = 5;
const answers = [];
for (let i = 1; i <= numberOfCases; i++) {
  let rests = input[i];
  const restQuaters = parseInt(rests / quarter);
  rests = rests - quarter * restQuaters;
  const restDimes = parseInt(rests / dime);
  rests = rests - dime * restDimes;
  const restNickels = parseInt(rests / nickel);
  rests = rests - nickel * restNickels;
  answers.push(`${restQuaters} ${restDimes} ${restNickels} ${rests}`);
}

console.log(answers.join('\n'));
