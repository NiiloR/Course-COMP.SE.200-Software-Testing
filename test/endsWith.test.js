import endsWith from "../src/endsWith.js";

describe('endsWith', () => {
  test('returns true when string ends with the target', () => {
    expect(endsWith('abc', 'c')).toBe(true);
    expect(endsWith('a', 'a')).toBe(true);
    expect(endsWith('hello', 'lo')).toBe(true);
    expect(endsWith('12345', '45')).toBe(true);
  });

  test('returns false when string does not end with the target', () => {
    expect(endsWith('abc', 'b')).toBe(false);
    expect(endsWith('hello', 'world')).toBe(false);
    expect(endsWith('12345', '34')).toBe(false);
  });

  test('respects the position parameter when provided', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true);
    expect(endsWith('adiblec', 'b', 2)).toBe(false);
    expect(endsWith('hello', 'he', 2)).toBe(true);
    expect(endsWith('12345', '12', 2)).toBe(true);
  });

  test('handles position greater than string length', () => {
    expect(endsWith('abc', 'c', 10)).toBe(true);
    expect(endsWith('hello', 'o', 100)).toBe(true);
  });

  test('handles position less than 0', () => {
    expect(endsWith('abc', 'a', -1)).toBe(false);
    expect(endsWith('hello', 'lo', -10)).toBe(false);
  });

  test('handles position as NaN', () => { 
    expect(endsWith('hello', 'he', NaN)).toBe(false);
    expect(endsWith('abc', 'c', NaN)).toBe(false);
  });

  test('throws an error when string or target is null', () => { 
    expect(() => endsWith('abc', null)).toThrow(TypeError);
    expect(() => endsWith(null, 'abc')).toThrow(TypeError);
    expect(() => endsWith(null, null)).toThrow(TypeError);
  });

  test('handles edge cases with empty strings and targets', () => {
    expect(endsWith('', '')).toBe(true); // Empty string ends with empty target
    expect(endsWith('abc', '')).toBe(true); // Any string ends with an empty target
    expect(endsWith('', 'a')).toBe(false); // Empty string does not end with non-empty target
  });

  test('handles non-string inputs gracefully', () => {
    expect(endsWith(12345, '45')).toBe(true); // Number is coerced to string
    expect(endsWith(null, 'null')).toBe(false); // null coerced to string does not end with 'null'
    expect(endsWith(undefined, 'undefined')).toBe(false); // undefined coerced to string does not end with 'undefined'
  });

  test('handles target longer than the string', () => {
    expect(endsWith('abc', 'abcd')).toBe(false);
    expect(endsWith('short', 'toolong')).toBe(false);
  });

  test('ensures strict equality for comparisons', () => {
    expect(endsWith('12345', 45)).toBe(false); // Different types (string vs. number)
    expect(endsWith('abc', 'C')).toBe(false); // Case-sensitive comparison
  });
});
