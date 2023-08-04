const fs = require('fs');
const input = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `70`
).split('\n');

let num = Number(input[0]);

if (num >= 90) {
  console.log('A');
} else if (num >= 80) {
  console.log('B');
} else if (num >= 70) {
  console.log('C');
} else if (num >= 60) {
  console.log('D');
} else {
  console.log('F');
}
