const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync(0).toString()
    : `9
    -13`
).split('\n');

A = Number(input[0]);
B = Number(input[1]);
if (A * B > 0) {
  A > 0 ? console.log(1) : console.log(3);
} else if (A * B < 0) {
  A > 0 ? console.log(4) : console.log(2);
}
