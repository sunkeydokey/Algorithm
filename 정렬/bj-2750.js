const fs = require('fs');
const input = (
  process.platform === 'linux' //
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
5
1
2
4
3`
).split('\n');

const n = input.shift();
const numbers = [];
for (let i = 0; i < n; i++) {
  numbers.push(Number(input[i]));
}
numbers.sort((a, b) => a - b);
console.log(numbers.join('\n'));
