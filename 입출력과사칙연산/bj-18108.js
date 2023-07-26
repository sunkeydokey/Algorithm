const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2541`
).split('\n');

const buddha = Number(input[0]);
console.log(buddha - 543);
