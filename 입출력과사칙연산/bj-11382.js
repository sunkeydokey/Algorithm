const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `77 77 7777`
).split('\n');

let [A, B, C] = input[0].split(' ');
A = Number(A);
B = Number(B);
C = Number(C);
console.log(A + B + C);
