const brain = require('./solution');

describe('part1', () => {
  test('R8,U5,L5,D3, U7,R6,D4,L4 requires 6 steps', () => {
    const input = 'R8,U5,L5,D3\nU7,R6,D4,L4'.split('\n');

    expect(brain.solve(input)[0]).toBe(6);
  });
  test('R75,D30,R83,U83,L12,D49,R71,U7,L72,U62,R66,U55,R34,D71,R55,D58,R83 requires 159 steps', () => {
    const input = 'R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83'.split(
      '\n'
    );

    expect(brain.solve(input)[0]).toBe(159);
  });
  test('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51,U98,R91,D20,R16,D67,R40,U7,R15,U6,R7 requires 135 steps', () => {
    const input = 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7'.split(
      '\n'
    );

    expect(brain.solve(input)[0]).toBe(135);
  });
});

describe('part2', () => {
  test('R8,U5,L5,D3, U7,R6,D4,L4 requires 30 steps', () => {
    const input = 'R8,U5,L5,D3\nU7,R6,D4,L4'.split('\n');

    expect(brain.solve(input)[1]).toBe(30);
  });
  test('R75,D30,R83,U83,L12,D49,R71,U7,L72,U62,R66,U55,R34,D71,R55,D58,R83 requires 610 steps', () => {
    const input = 'R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83'.split(
      '\n'
    );

    expect(brain.solve(input)[1]).toBe(610);
  });
  test('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51,U98,R91,D20,R16,D67,R40,U7,R15,U6,R7 requires 410 steps', () => {
    const input = 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7'.split(
      '\n'
    );

    expect(brain.solve(input)[1]).toBe(410);
  });
});
