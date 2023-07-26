const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `joonas`
).split('\n');

console.log(`${input[0]}??!`);
