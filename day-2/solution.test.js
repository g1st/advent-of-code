const brain = require('./solution');

describe('solution-part1', () => {
  test('1,0,0,0,99 becomes 2,0,0,0,99', () => {
    expect(brain.Intcode([1, 0, 0, 0, 99])).toEqual(
      expect.arrayContaining([2, 0, 0, 0, 99])
    );
  });
  test('2,3,0,3,99 becomes 2,3,0,6,99', () => {
    expect(brain.Intcode([2, 3, 0, 3, 99])).toEqual(
      expect.arrayContaining([2, 3, 0, 6, 99])
    );
  });
  test('2,4,4,5,99,0 becomes 2,4,4,5,99,9801', () => {
    expect(brain.Intcode([2, 4, 4, 5, 99, 0])).toEqual(
      expect.arrayContaining([2, 4, 4, 5, 99, 9801])
    );
  });
  test('1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99', () => {
    expect(brain.Intcode([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual(
      expect.arrayContaining([30, 1, 1, 4, 2, 5, 6, 0, 99])
    );
  });
});

describe('solution-part2', () => {
  test('result[0] should be 19690720', () => {
    expect(brain.result2[0]).toBe(19690720);
  });
});
