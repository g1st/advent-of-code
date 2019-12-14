const engine = require('./solutions');

describe('problem-1', () => {
  test('mass of 12 should get 2', () => {
    const result = engine.countFuel(12);
    expect(result).toBe(2);
  });
  test('mass of 14 should get 2', () => {
    const result = engine.countFuel(14);
    expect(result).toBe(2);
  });
  test('mass of 1969 should get 654', () => {
    const result = engine.countFuel(1969);
    expect(result).toBe(654);
  });
  test('mass of 100756 should get 33583', () => {
    const result = engine.countFuel(100756);
    expect(result).toBe(33583);
  });
  test('fuelCounter1 returns a number', () => {
    const answer = engine.fuelCounter1();
    expect(typeof answer).toBe('number');
  });
});

describe('problem-2', () => {
  test('mass of 12 should return 2', () => {
    const result = engine.recCountFuel(12);
    expect(result).toBe(2);
  });
  test('mass of 14 should get 2', () => {
    const result = engine.recCountFuel(14);
    expect(result).toBe(2);
  });
  test('mass of 1969 should get 966', () => {
    const result = engine.recCountFuel(1969);
    expect(result).toBe(966);
  });
  test('mass of 100756 should get 50346', () => {
    const result = engine.recCountFuel(100756);
    expect(result).toBe(50346);
  });
  test('fuelCounter2 returns a number', () => {
    const answer = engine.fuelCounter2();
    expect(typeof answer).toBe('number');
  });
});
