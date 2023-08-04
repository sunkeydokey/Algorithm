const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `0 30`
).split('\n');

let [H, M] = input[0].split(' ');
H = Number(H);
M = Number(M);
let minute = M - 45;
if (M < 45) {
  H !== 0
    ? console.log(`${H - 1} ${60 + minute}`)
    : console.log(`${23} ${60 + minute}`);
} else {
  console.log(`${H} ${minute}`);
}
