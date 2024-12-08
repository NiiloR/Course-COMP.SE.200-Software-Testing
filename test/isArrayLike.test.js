import isArrayLike  from '../src/isArrayLike';

describe('isArrayLike', () => {
    test('Example case', () => {
        expect(isArrayLike([1, 2, 3])).toBe(true)
    })

    test('Empty and populated array', () => {
        expect(isArrayLike([])).toBe(true)
        expect(isArrayLike([1, 2, 3])).toBe(true)
    })

    test('String input', () => {
        expect(isArrayLike('string type')).toBe(true)
    })

    test('Values from inside an object', () => {
        const obj = {
            name: 'Tester Devin',
            age: 20,
            hobbies: ['programming', 'football', 'music']
        }
        expect(isArrayLike(obj.hobbies)).toBe(true)
        expect(isArrayLike(obj.age)).toBe(false)
        expect(isArrayLike(obj)).toBe(false)
    })

    test('Non-array-like inputs', () => {
        expect(isArrayLike(9000)).toBe(false)
        expect(isArrayLike(true)).toBe(false)
        expect(isArrayLike(NaN)).toBe(false)
        expect(isArrayLike(undefined)).toBe(false)
        expect(isArrayLike({name: 'Devin', occupation: 'tester'})).toBe(false)
        expect(isArrayLike(()=>{'a'})).toBe(false)
    })

})