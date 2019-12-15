const path = require('path');
const fs = require('fs');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .split(',')
  .map(Number);

const Intcode = (input, cursor = 0) => {
  const opcode = input[cursor];
  if (opcode === 99) {
    return input;
  }
  const firstPos = input[cursor + 1];
  const secondPos = input[cursor + 2];
  const output = input[cursor + 3];
  const firstValue = input[firstPos];
  const secondValue = input[secondPos];
  let result;

  if (opcode === 1) {
    result = firstValue + secondValue;
  } else {
    result = firstValue * secondValue;
  }
  input[output] = result;

  return Intcode(input, cursor + 4);
};

const Intcode2 = input => {
  for (let verb = 0; verb < 100; verb++) {
    for (let noun = 0; noun < 100; noun++) {
      const inp = [...input];
      inp[1] = verb;
      inp[2] = noun;
      const result = Intcode(inp);
      if (result[0] === 19690720) {
        return inp;
      }
    }
  }
};

const result1 = Intcode([...input]);
const result2 = Intcode2(input);
console.log('answer to part2', 100 * result2[1] + result2[2]);

module.exports = { Intcode, Intcode2, result2 };
