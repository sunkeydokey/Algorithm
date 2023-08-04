const fs = require('fs');
const input = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `1`
).split('\n');

const goal = Number(input[0]);
let rooms = 0;
let endOfRoom = 1;
let count = 0;

while (endOfRoom < goal) {
  endOfRoom = endOfRoom + 6 * count;
  count++;
  rooms++;
}
console.log(goal === 1 ? 1 : rooms);
