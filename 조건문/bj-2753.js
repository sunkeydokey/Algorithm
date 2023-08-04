const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `822`
).split('\n');

let year = Number(input[0]);

if (year % 4 == 0) {
  if (year % 400 == 0) {
    console.log(1);
    return;
  } else if (year % 100 == 0) {
    console.log(0);
  } else {
    console.log(1);
  }
} else {
  console.log(0);
}
