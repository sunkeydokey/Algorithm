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
  console.log(
    input[0]
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
  process.exit();
});
