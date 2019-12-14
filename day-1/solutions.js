const fs = require('fs');
const path = require('path');

const countFuel = mass => Math.floor(mass / 3) - 2;

const fuelCounter1 = () => {
  const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
  const massesArray = input.split('\n').map(Number);
  const fuelArray = massesArray.map(mass => countFuel(mass));
  const totalFuelNeeded = fuelArray.reduce((a, b) => a + b);
  return totalFuelNeeded;
};

const recCountFuel = fuel => {
  if (fuel <= 8) return 0;
  const countFuel = Math.floor(fuel / 3) - 2;
  return countFuel + recCountFuel(countFuel);
};

const fuelCounter2 = () => {
  const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
  const massesArray = input.split('\n').map(Number);
  const fuelArray = massesArray.map(mass => recCountFuel(mass));
  const totalFuelNeeded = fuelArray.reduce((a, b) => a + b);
  return totalFuelNeeded;
};
console.log(fuelCounter1());
console.log(fuelCounter2());

module.exports = { countFuel, fuelCounter1, fuelCounter2, recCountFuel };
