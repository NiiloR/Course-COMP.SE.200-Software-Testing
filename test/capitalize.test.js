import capitalize from "../src/capitalize.js";

describe('capitalize', () => {
    test('capitalizes a string with all uppercase letters', () => {
      expect(capitalize('FRED')).toBe('Fred');
    });
  
    test('capitalizes a string with all lowercase letters', () => {
      expect(capitalize('fred')).toBe('Fred');
    });
  
    test('handles mixed case strings correctly', () => {
      expect(capitalize('fReD')).toBe('Fred');
    });
  
    test('returns an empty string when given an empty string', () => {
      expect(capitalize('')).toBe('');
    });
  
    test('handles strings with a single character', () => {
      expect(capitalize('f')).toBe('F');
      expect(capitalize('F')).toBe('F');
    });
  
    test('handles non-string inputs by converting them to strings', () => {
      expect(capitalize(123)).toBe('123');
      expect(capitalize(12.4)).toBe('12.4');
      expect(capitalize(null)).toBe('Null');
      expect(capitalize(undefined)).toBe('Undefined');
      expect(capitalize(true)).toBe('True');
      expect(capitalize(false)).toBe('False');
    });
  
    test('does not modify non-alphabetic characters', () => {
      expect(capitalize('123abc')).toBe('123abc');
      expect(capitalize('$money')).toBe('$money');
    });

    test('ignores extra spaces around the string', () => {
      expect(capitalize('  fred  ')).toBe('Fred');
    });

  });