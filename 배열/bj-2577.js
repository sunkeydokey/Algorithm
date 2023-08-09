const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `150
266
427`
).split('\n');

let [a, b, c] = input;
a = Number(a);
b = Number(b);
c = Number(c);

let strArr = String(a * b * c).split('');
let obj = {};
strArr.forEach((number) => {
  obj[number] = obj[number] ? obj[number] + 1 : 1;
});
let answer = [];
for (let i = 0; i < 10; i++) {
  obj[String(i)] ? answer.push(obj[String(i)]) : answer.push(0);
}
console.log(answer.join('\n'));
