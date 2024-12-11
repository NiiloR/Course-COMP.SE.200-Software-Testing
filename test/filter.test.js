import filter  from '../src/filter';


const users = [
   { 'user': 'barney', 'active': true },
   { 'user': 'fred',   'active': false }
]


describe('filter', () => {
    test('Example case', () => {
        expect(filter(users, ({ active }) => active)).toEqual([{ 'user': 'barney', 'active': true }])
    })

    test('Filtering numbers', () => {
        expect(filter([1, 2, 3, 4, 5], n => n > 2)).toEqual[3, 4, 5]
        expect(filter([1, 2, 3, 4, 5], n => n)).toEqual([1, 2, 3, 4, 5]) // Allways true
        expect(filter([1, 2, 3, 4, 5], n => n < 1 && n > 5)).toEqual([]) // Never true filter term
    })
    
    test('Filtering strings', () => {
        expect(filter('string string string', n => n.includes('s') || n.includes('i'))).toEqual(['s', 'i', 's', 'i', 's', 'i' ])
        expect(filter(['test', 'are', 'being', 'done', 'rarely'], n => n.includes('re'))).toEqual(['are', 'rarely'])
    })

    test('Filtering term that does not return boolean', () => {
        expect(filter([1, 2, 3], n => NaN)).toEqual([])
        expect(filter([1, 2, 3], n => undefined)).toEqual([])
    })
    
    test('Passing NaN array', () => {
        expect(filter(NaN, n => n > 0)).toEqual([])
    })

    test('Passing undefined array', () => {
        expect(filter(undefined, n => n > 0)).toEqual([])
    })

    test('Using incompatible filtering term with array', () => {
        expect(filter(['word', 'another', 'word2'], n => n * n)).toEqual([])
    })
})