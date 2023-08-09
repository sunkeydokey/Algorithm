const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `888888`
).split('\n');

let arr = input[0].split('');

let obj = { needs: 0 };

arr.forEach((number) => {
  let num = number == 9 ? '6' : number;
  obj[num] = obj[num] ? (num == 6 ? obj[num] + 0.5 : obj[num] + 1) : 1;

  obj['needs'] = obj['needs'] < obj[num] ? obj[num] : obj['needs'];
});

console.log(Math.floor(obj.needs));
