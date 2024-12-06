import ceil from "../src/ceil.js";

describe('ceil', () => {
  test('rounds up to the nearest integer by default', () => {
    expect(ceil(4.006)).toBe(5);
    expect(ceil(4.1)).toBe(5);
    expect(ceil(-4.1)).toBe(-4);
  });

  test('rounds up to the specified precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
    expect(ceil(0.12345, 3)).toBe(0.124);
    expect(ceil(-0.12345, 3)).toBe(-0.123);
  });

  test('rounds up with negative precision', () => {
    expect(ceil(6040, -2)).toBe(6100);
    expect(ceil(-6040, -2)).toBe(-6000);
    expect(ceil(123.45, -1)).toBe(130);
  });

  test('handles whole numbers correctly', () => {
    expect(ceil(100)).toBe(100);
    expect(ceil(100, 2)).toBe(100);
    expect(ceil(100, -2)).toBe(100);
  });

  test('handles zero and near-zero values', () => {
    expect(ceil(0)).toBe(0);
    expect(ceil(-0)).toBe(0); // -0 normalized to 0
    expect(ceil(0.0001, 3)).toBe(0.001);
    expect(ceil(-0.0001, 3)).toBe(-0.0); // Rounded towards 0
  });

  test('handles large numbers correctly', () => {
    expect(ceil(987654.321, 1)).toBe(987654.4);
    expect(ceil(987654.321, -3)).toBe(988000);
  });

  test('handles invalid or missing precision values', () => {
    expect(ceil(5.678)).toBe(6); // Default precision 0
    expect(ceil(5.678, null)).toBe(6); // Null precision treated as 0
    expect(ceil(5.678, undefined)).toBe(6); // Undefined precision treated as 0
  });

  test('throws an error for invalid inputs', () => {
    expect(() => ceil('abc')).toThrow(TypeError);
    expect(() => ceil(null)).toThrow(TypeError);
    expect(() => ceil(undefined)).toThrow(TypeError);
    expect(() => ceil({}, 2)).toThrow(TypeError);
  });
});
