const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10
5 12 7 10 9 1 2 3 11 8
13`
).split('\n');

let numArr = input[1].split(' ');
const x = Number(input[2]);
let answer = 0;

const numbers = new Map();
numArr.map((item) => numbers.set(item, Number(item)));

numArr.forEach((number) => {
  let need = x - numbers.get(number);
  numbers.get(need.toString()) ? (answer += 1) : null;
});

console.log(parseInt(answer / 2));
