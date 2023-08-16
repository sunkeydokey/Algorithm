const fs = require('fs');
const input = (
  process.platform === 'linux' //
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
3 4
1 1
1 -1
2 2
3 3`
).split('\n');

input.shift();
const points = input.map((point) => point.split(' ').map(Number));
points.sort((a, b) => (a[1] != b[1] ? a[1] - b[1] : a[0] - b[0]));
let answer = '';
points.forEach((point) => {
  answer += `${point[0]} ${point[1]} \n`;
});
console.log(answer);
