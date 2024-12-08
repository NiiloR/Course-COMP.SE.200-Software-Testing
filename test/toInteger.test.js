import toInteger  from '../src/toInteger';


describe('ToInteger', () => {
    test('Positive number as string transformations', () => {
        expect(toInteger('3.2')).toBe(3);
        expect(toInteger('3.0')).toBe(3);
        expect(toInteger('3.5')).toBe(3);
        expect(toInteger('3.99999999999999')).toBe(3);
    });

    test('Negative number as string transformations', () => {
        expect(toInteger('-3.2')).toBe(-3);
        expect(toInteger('-3.0')).toBe(-3);
        expect(toInteger('-3.5')).toBe(-3);
        expect(toInteger('-3.99999999999999')).toBe(-3);
    });

    test('Zero and negative zero', () => {
        expect(toInteger('0')).toBe(0);
        expect(toInteger('-0')).toBe(0);
    });

    test('Positive, negative and zero as numbers', () => {
        expect(toInteger(3.2)).toBe(3);
        expect(toInteger(3.0)).toBe(3);
        expect(toInteger(3.5)).toBe(3);
        expect(toInteger(3.99999999999999)).toBe(3);
        expect(toInteger(-3.2)).toBe(-3);
        expect(toInteger(-3.0)).toBe(-3);
        expect(toInteger(-3.5)).toBe(-3);
        expect(toInteger(-3.99999999999999)).toBe(-3);
    })

    test('Positive and negative infinite to integer', () => {
        expect(toInteger(1/0)).toBe(1.7976931348623157e+308);
        expect(toInteger(-1/0)).toBe(-1.7976931348623157e+308);
    });

    test('Number with zeros in front of it', () => {
        expect(toInteger('0003.200')).toBe(3);
    });

    test('Empty string', () => {
        expect(toInteger('')).toBe(0)
    })

    test('Minimum and maximum numeric value', () => {
        expect(toInteger(Number.MIN_VALUE)).toBe(0)
        expect(toInteger(Number.MAX_VALUE)).toBe(1.7976931348623157e+308)
    })

    test('Non-valid inputs', () => {
        expect(toInteger('test_string')).toBe(0);
        expect(toInteger(Object('a'))).toBe(0)
        expect(toInteger('test_string')).toBe(0)
        expect(toInteger(() => {'a'})).toBe(0)
        expect(toInteger(NaN)).toBe(0)
        expect(toInteger(undefined)).toBe(0)
        });

})
