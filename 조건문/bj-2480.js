const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4 5 4`
).split('\n');

let [a, b, c] = input[0].split(' ');
a = Number(a);
b = Number(b);
c = Number(c);

const diceSet = new Set([a, b, c]);
const dices = [...diceSet];

if (dices.length === 3) {
  let value = Math.max(a, b, c);
  console.log(value * 100);
} else if (dices.length === 2) {
  if (a === b || a === c) {
    console.log(1000 + a * 100);
  } else if (b === c) {
    console.log(1000 + b * 100);
  }
} else {
  console.log(a * 1000 + 10000);
}
