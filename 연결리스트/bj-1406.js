const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `abc
9
L
L
L
L
L
P x
L
B
P y`
).split('\n');
const left = input[0].split('');
const right = [];
const orderCount = parseInt(input[1]);

for (let i = 2; i < orderCount + 2; i++) {
  let [order, text] = input[i].split(' ');
  if (order === 'L') {
    if (left.length) {
      const value = left.pop();
      right.push(value);
    }
  } else if (order === 'D') {
    if (!right.length) continue;
    const value = right.pop();
    left.push(value);
  } else if (order === 'B') {
    if (left.length) {
      left.pop();
    }
  } else {
    left.push(text);
  }
}

for (; right.length > 0; ) {
  left.push(right.pop());
}

console.log(left.join(''));
