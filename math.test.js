const {
  add, subtract, multiply, divide,
} = require('./math');

describe('math.js test', () => {
  test('should test add', () => {
    expect(add(3, 4)).toBe(7);
  });

  test('should test subtract', () => {
    expect(subtract(2, 5)).toBe(7);
  });

  test('should test multiply', () => {
    expect(multiply(2, 2)).toBe(4);
  });

  test('should test divide', () => {
    expect(divide(2, 2)).toBe(1);
  });
});
