const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6 22 4`
).split('\n');

let [A, B, C] = input[0].split(' ');
A = Number(A);
B = Number(B);
C = Number(C);
console.log(`${(A + B) % C}
${((A % C) + (B % C)) % C}
${(A * B) % C}
${((A % C) * (B % C)) % C}`);
