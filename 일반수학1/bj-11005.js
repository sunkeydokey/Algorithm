const { reverse } = require('dns');
const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1023 10`
).split('\n');

const numburItems = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F',
  16: 'G',
  17: 'H',
  18: 'I',
  19: 'J',
  20: 'K',
  21: 'L',
  22: 'M',
  23: 'N',
  24: 'O',
  25: 'P',
  26: 'Q',
  27: 'R',
  28: 'S',
  29: 'T',
  30: 'U',
  31: 'V',
  32: 'W',
  33: 'X',
  34: 'Y',
  35: 'Z',
};

let [N, B] = input[0].split(' ');
// N = N.split('').reverse();
B = Number(B);
let number = Number(N);
let beforeTranform = [];
while (number >= B) {
  beforeTranform.push(number % B);
  number = parseInt(number / B);
}
beforeTranform.push(number);
beforeTranform.reverse();
const transform = beforeTranform.map((item) => numburItems[item]);
const answer = transform.join('');
console.log(answer);
