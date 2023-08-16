const fs = require('fs');
const input = (
  process.platform === 'linux' //
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
21 Junkyu
21 Dohyun
20 Sunyoung`
).split('\n');

input.shift();

const users = input
  .map((user, index) => user + ' ' + index)
  .map((user) => user.split(' '));
users.sort((a, b) => {
  if (a[0] == b[0]) return a[2] - b[2];
  else return a[0] - b[0];
});

for (let user of users) {
  console.log(`${user[0]} ${user[1]}`);
}
