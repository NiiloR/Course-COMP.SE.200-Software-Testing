import map  from '../src/map';

//Example function for passing as parameter
function square(n) {
    return n * n
}

function divideByZero(n) {
    return n/0
}

describe('map', () => {
    
    test('Example test', () => {
        expect(map([1, 2, 3], square)).toEqual([1, 4, 9])
    })

    test('Empty array', () => {
        expect(map([], square)).toEqual([])
    })

    test('Function to divide with zero', () => {
        expect(map([1, 2, 3], divideByZero)).toEqual([Infinity, Infinity, Infinity])
    })

    test('NaN function', () => {
        expect(map([1, 2, 3], NaN)).toThrow()
    })

    test('undefined function', () => {
        expect(map([1, 2, 3], undefined)).toThrow()
    })

    test('Non-array input to iterate over', () => {
        expect(map(4, square)).toThrow()
    })

    test('Array of strings for fuction made for numbers', () => {
        expect(map(['a', 'b', 'c'], square)).toThrow()
    })
})