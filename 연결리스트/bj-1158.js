const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `7 3`
).split('\n');

let [N, K] = input[0].split(' ');
N = Number(N);
K = Number(K);

let circle = [];
for (let i = 0; i < N; i++) {
  circle.push(i + 1);
}

let result = [];
for (let i = 1; circle.length; i++) {
  if (i % K) {
    circle.push(circle.shift());
  } else {
    result.push(circle.shift());
  }
}

console.log(`<${result.join(', ')}>`);
