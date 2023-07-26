const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 2`
).split('\n');

const [A, B] = input[0].split(' ');
console.log(Number(A) + Number(B));
