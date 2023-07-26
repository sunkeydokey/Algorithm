const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `472
    385`
).split('\n');

let [A, B] = input;
A = Number(A);
B = Number(B);
const bHundreds = parseInt(B / 100);
const bTeens = parseInt((B - bHundreds * 100) / 10);
const bOnes = B - bHundreds * 100 - bTeens * 10;
console.log(`${bOnes * A}
${bTeens * A}
${bHundreds * A}
${A * B}`);
