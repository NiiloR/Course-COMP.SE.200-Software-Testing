import defaultTo from "../src/defaultTo.js";

describe('defaultTo', () => {
  test('returns the value when it is valid (not null, undefined, or NaN)', () => {
    expect(defaultTo(1, 10)).toBe(1);
    expect(defaultTo('hello', 'default')).toBe('hello');
    expect(defaultTo(false, true)).toBe(false); // Boolean values should be returned as is
    expect(defaultTo(0, 100)).toBe(0); // Falsy but valid value
    expect(defaultTo([], 'default')).toEqual([]); // Empty array
    expect(defaultTo({}, 'default')).toEqual({}); // Empty object
  });

  test('returns the default value when the input is null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  test('returns the default value when the input is undefined', () => {
    expect(defaultTo(undefined, 'default')).toBe('default');
  });

  test('returns the default value when the input is NaN', () => {
    expect(defaultTo(NaN, 'default')).toBe('default');
  });

  test('handles edge cases with default values', () => {
    expect(defaultTo(null, null)).toBe(null); // Both value and default are null
    expect(defaultTo(undefined, undefined)).toBe(undefined); // Both value and default are undefined
    expect(defaultTo(NaN, NaN)).toBe(NaN); // Both value and default are NaN
  });

  test('returns the value when both value and defaultValue are objects or arrays', () => {
    const valueObj = { key: 'value' };
    const defaultObj = { key: 'default' };
    expect(defaultTo(valueObj, defaultObj)).toBe(valueObj);

    const valueArr = [1, 2, 3];
    const defaultArr = [4, 5, 6];
    expect(defaultTo(valueArr, defaultArr)).toBe(valueArr);
  });

  test('returns the value when it is a function', () => {
    const func = () => 'I am a function';
    expect(defaultTo(func, 'default')).toBe(func);
  });

  test('handles falsy values other than null, undefined, or NaN correctly', () => {
    expect(defaultTo('', 'default')).toBe(''); // Empty string is valid
    expect(defaultTo(0, 'default')).toBe(0); // Zero is valid
    expect(defaultTo(false, 'default')).toBe(false); // False is valid
  });
});
