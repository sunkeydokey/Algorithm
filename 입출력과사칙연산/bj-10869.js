const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `7 3`
).split('\n');

const [A, B] = input[0].split(' ');
console.log(
  `${Number(A) + Number(B)}
${Number(A) - Number(B)}
${Number(A) * Number(B)}
${parseInt(Number(A) / Number(B))}
${Number(A) % Number(B)}
`
);
