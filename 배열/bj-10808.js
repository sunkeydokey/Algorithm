const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `baekjoon`
).split('\n');

let strArr = input[0].split('');
const map = new Map();

for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
  map.set(String.fromCharCode(i), 0);
}

strArr.forEach((alphabet) => {
  let count = map.get(alphabet);
  map.set(alphabet, count + 1);
});

let answer = [];
map.forEach((value) => answer.push(value));
console.log(answer.join(' '));
