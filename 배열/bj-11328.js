const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  arr = [];
  for (let i = 1; i < input.length; i++) {
    let [firstWord, secondWord] = input[i].split(' ');
    const map = new Map();
    map.set('isImpossible', false);
    firstWord = firstWord.split('');
    secondWord = secondWord.split('');

    firstWord.forEach((alphabet) => {
      let count = map.get(alphabet);
      count ? map.set(alphabet, count + 1) : map.set(alphabet, 1);
    });
    secondWord.forEach((alphabet) => {
      let count = map.get(alphabet);
      if (count) {
        map.set(alphabet, count - 1);
      } else {
        map.set('isImpossible', true);
      }
    });
    map.get('isImpossible') ? arr.push('Impossible') : arr.push('Possible');
  }
  console.log(arr.join('\n'));
  process.exit();
});
