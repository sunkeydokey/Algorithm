const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4 5`
).split('\n');

const [A, B] = input[0].split(' ');
console.log(Number(A) / Number(B));
