const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1 2`
).split('\n');

let [A, B] = input[0].split(' ');
A = Number(A);
B = Number(B);
if (A > B) {
  console.log('>');
} else if (A < B) {
  console.log('<');
} else {
  console.log('==');
}
