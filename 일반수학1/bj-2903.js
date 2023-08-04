const fs = require('fs');
const input = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `5`
).split('\n');

const count = input[0];
const pointsOfOneSide = 2 ** count + 1;
console.log(pointsOfOneSide ** 2);
