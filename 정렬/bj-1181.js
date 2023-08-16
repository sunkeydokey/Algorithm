const fs = require('fs');
const input = (
  process.platform === 'linux' //
    ? fs.readFileSync('/dev/stdin').toString()
    : `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`
).split('\n');

input.shift();
const words = [...new Set(input)];
words.sort((a, b) => {
  if (a.length != b.length) return a.length - b.length;
  if (a < b) return -1;
  if (a > b) return 1;
  if (a == b) return 0;
});
console.log(words.join('\n'));
