const fs = require('fs');
const input = (
  process.platform === 'linux' //
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 1 2`
).split('\n');

const numbers = input[0].split(' ').map(Number);
numbers.sort((a, b) => a - b);
console.log(numbers.join(' '));
