const fs = require('fs');
const input = (
  process.platform === 'linux' //
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
2 4 -10 4 -9`
).split('\n');

input.shift();

const numbers = input[0].split(' ');
const numSet = [...new Set(numbers)];
const idxObj = {};
numSet.sort((a, b) => a - b).forEach((num, index) => (idxObj[num] = index));
const answer = numbers.map((number) => idxObj[number]);
console.log(answer.join(' '));
