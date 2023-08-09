const fs = require('fs');
const input = (
  process.platform === 'linux' //
    ? fs.readFileSync('/dev/stdin').toString()
    : `11
    1 4 1 2 4 2 4 2 3 4 4
    5`
).split('\n');

let arr = input[1].split(' ');
const v = input[2];

const answer = arr.filter((num) => num == v);
console.log(answer.length);
