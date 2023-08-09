const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 3
0 1
0 1
0 1
0 1
0 1`
).split('\n');

let [N, K] = input
  .shift()
  .split(' ')
  .map((x) => +x);
let count = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
];
let room = 0;

for (let i = 0; i < N; i++) {
  let [S, Y] = input[i].split(' ').map((x) => +x);

  count[Y - 1][S]++;
}

count.forEach(([f, m]) => {
  room += Math.ceil(f / K) + Math.ceil(m / K);
});

console.log(room);
