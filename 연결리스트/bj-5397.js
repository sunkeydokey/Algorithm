const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
<<B0<A>>10-
ThIsIsS3Cr3t`
).split('\n');

for (let i = 1; i < input.length; i++) {
  const left = [];
  const right = [];

  const keyInput = input[i].split('');
  keyInput.forEach((input) => {
    if (input === '<') {
      if (left.length) right.push(left.pop());
    } else if (input === '-') {
      if (left.length) left.pop();
    } else if (input === '>') {
      if (right.length) left.push(right.pop());
    } else {
      left.push(input);
    }
  });
  console.log([...left, ...right.reverse()].join(''));
}
