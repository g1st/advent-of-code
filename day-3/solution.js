const path = require('path');
const fs = require('fs');

const start = process.hrtime();

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .split('\n');

const parseWire = str =>
  str.split(',').map(el => [el[0], Number(el.substr(1))]);

const solve = ([wire1, wire2]) => {
  const firstWire = parseWire(wire1);
  const secondWire = parseWire(wire2);
  let lastPosition = { x: 0, y: 0 };
  const to = { x: 0, y: 0 };
  const firstWirePositions = [];
  const secondWirePositions = [];
  const crossings = [];
  const distances = [];
  let totalSteps = 0;

  const getDestination = (direction, steps, arr) => {
    if (direction === 'R') {
      to.x = lastPosition.x + steps;
      to.y = lastPosition.y;
      arr.push({
        from: lastPosition,
        to: { x: to.x, y: to.y },
        stepsTillNow: totalSteps
      });
      totalSteps += steps;
      lastPosition = { ...to };
    }
    if (direction === 'U') {
      to.x = lastPosition.x;
      to.y = lastPosition.y + steps;
      arr.push({
        from: lastPosition,
        to: { x: to.x, y: to.y },
        stepsTillNow: totalSteps
      });
      totalSteps += steps;
      lastPosition = { ...to };
    }
    if (direction === 'L') {
      to.x = lastPosition.x - steps;
      to.y = lastPosition.y;
      arr.push({
        from: lastPosition,
        to: { x: to.x, y: to.y },
        stepsTillNow: totalSteps
      });
      totalSteps += steps;
      lastPosition = { ...to };
    }
    if (direction === 'D') {
      to.x = lastPosition.x;
      to.y = lastPosition.y - steps;
      arr.push({
        from: lastPosition,
        to: { x: to.x, y: to.y },
        stepsTillNow: totalSteps
      });
      totalSteps += steps;
      lastPosition = { ...to };
    }
  };

  firstWire.map(([direction, steps]) => {
    getDestination(direction, steps, firstWirePositions);
  });
  lastPosition.x = 0;
  lastPosition.y = 0;
  totalSteps = 0;
  secondWire.map(([direction, steps]) => {
    getDestination(direction, steps, secondWirePositions);
  });

  firstWirePositions.map(wire1 => {
    secondWirePositions.map(wire2 => {
      if (
        (wire1.from.x === wire1.to.x && wire2.from.y === wire2.to.y) ^
        (wire1.from.y === wire1.to.y && wire2.from.x === wire2.to.x)
      ) {
        const vertical = wire1.from.x === wire1.to.x ? wire1 : wire2;
        const horizontal = wire1.from.y === wire1.to.y ? wire1 : wire2;
        if (
          vertical.from.x >= Math.min(horizontal.from.x, horizontal.to.x) &&
          vertical.from.x <= Math.max(horizontal.from.x, horizontal.to.x)
        ) {
          if (
            horizontal.from.y >= Math.min(vertical.from.y, vertical.to.y) &&
            horizontal.from.y <= Math.max(vertical.from.y, vertical.to.y)
          ) {
            crossings.push({ x: vertical.from.x, y: horizontal.from.y });
            const verticalExtraSteps = Math.abs(
              Math.abs(vertical.from.y) - Math.abs(horizontal.from.y)
            );
            const horizontalExtraSteps = Math.abs(
              Math.abs(horizontal.from.x) - Math.abs(vertical.from.x)
            );
            distances.push(
              vertical.stepsTillNow +
                verticalExtraSteps +
                horizontal.stepsTillNow +
                horizontalExtraSteps
            );
          }
        }
      }
    });
  });
  const manhattanDistances = crossings
    .filter(obj => obj.x !== 0 && obj.y !== 0)
    .map(obj => Math.abs(obj.x) + Math.abs(obj.y));
  const closestIntersection = Math.min(...manhattanDistances);

  const minDistance = Math.min(...distances.filter(steps => steps !== 0));

  return [closestIntersection, minDistance];
};

console.log(solve(input));
const end = process.hrtime(start);
console.info('Execution time (hr): %ds %dms', end[0], end[1] / 1000000);

module.exports = {
  solve
};
