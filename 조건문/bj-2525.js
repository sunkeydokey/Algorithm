const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `23 48
    25`
).split('\n');

let [H, M] = input[0].split(' ');
const time = Number(input[1]);
H = Number(H);
M = Number(M);
let hour = parseInt(time / 60);
let minute = time - hour * 60;

let doneMinute;
if (M + minute >= 60) {
  doneMinute = M + minute - 60;
  hour = hour + 1;
} else {
  doneMinute = M + minute;
}

let doneHour;
if (H + hour >= 24) {
  doneHour = H + hour - 24;
} else {
  doneHour = H + hour;
}

console.log(`${doneHour} ${doneMinute}`);
