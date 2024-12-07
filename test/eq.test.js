import eq from "../src/./eq";

describe('eq', () => {
  test('returns true for strictly equal primitive values', () => {
    expect(eq(1, 1)).toBe(true);
    expect(eq('a', 'a')).toBe(true);
    expect(eq(true, true)).toBe(true);
    expect(eq(null, null)).toBe(true);
    expect(eq(undefined, undefined)).toBe(true);
  });

  test('returns false for strictly different primitive values', () => {
    expect(eq(1, 2)).toBe(false);
    expect(eq('a', 'b')).toBe(false);
    expect(eq(true, false)).toBe(false);
    expect(eq(null, undefined)).toBe(false);
  });

  test('handles object references correctly', () => {
    const obj = { a: 1 };
    const otherObj = { a: 1 };
    expect(eq(obj, obj)).toBe(true); // Same reference
    expect(eq(obj, otherObj)).toBe(false); // Different references
  });

  test('distinguishes between primitive and object-wrapped primitives', () => {
    expect(eq('a', Object('a'))).toBe(false);
    expect(eq(1, Object(1))).toBe(false);
    expect(eq(true, Object(true))).toBe(false);
  });

  test('handles NaN values correctly', () => {
    expect(eq(NaN, NaN)).toBe(true); // NaN is equal to itself in SameValueZero
    expect(eq(NaN, 1)).toBe(false);
    expect(eq(NaN, 'NaN')).toBe(false);
  });

  test('handles zero and negative zero', () => {
    expect(eq(0, 0)).toBe(true);
    expect(eq(-0, -0)).toBe(true);
    expect(eq(0, -0)).toBe(true); // SameValueZero treats 0 and -0 as equal
  });

  test('returns false for different data types', () => {
    expect(eq(1, '1')).toBe(false); // Loose equality not used
    expect(eq(true, 1)).toBe(false);
    expect(eq(null, 0)).toBe(false);
  });

  test('handles arrays and functions', () => {
    const arr = [1, 2, 3];
    const otherArr = [1, 2, 3];
    const func = () => 42;
    const otherFunc = () => 42;

    expect(eq(arr, arr)).toBe(true); // Same array reference
    expect(eq(arr, otherArr)).toBe(false); // Different references

    expect(eq(func, func)).toBe(true); // Same function reference
    expect(eq(func, otherFunc)).toBe(false); // Different function references
  });

  test('handles undefined and null edge cases', () => {
    expect(eq(undefined, undefined)).toBe(true);
    expect(eq(null, null)).toBe(true);
    expect(eq(undefined, null)).toBe(false);
    expect(eq(undefined, 0)).toBe(false);
    expect(eq(null, '')).toBe(false);
  });

  test('handles deeply nested structures by reference', () => {
    const nestedObj = { a: { b: 1 } };
    const otherNestedObj = { a: { b: 1 } };

    expect(eq(nestedObj, nestedObj)).toBe(true); // Same reference
    expect(eq(nestedObj, otherNestedObj)).toBe(false); // Different references
  });
});
