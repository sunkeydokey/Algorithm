const fs = require('fs');
const input = (
  process.platform === 'linux' //
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 2
4 1 2 3 5`
).split('\n');

const [_N, K] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
numbers.sort((a, b) => a - b);
console.log(numbers[K - 1]);
