import words  from '../src/words';


describe('words', () => {

  test('Separating words without specified pattern', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles'])
    expect(words('Fred, Barney, & Pebbles')).toEqual(['Fred', 'Barney', 'Pebbles'])
    expect(words('FRED, BARNEY, & PEBBLES')).toEqual(['FRED', 'BARNEY', 'PEBBLES'])
    expect(words('freD, barneY, & pebbleS')).toEqual(['freD', 'barneY', 'pebbleS'])
  })

  test('Special characters', () => {
    expect(words('fred, barney, & pebbles, äÄöÖåÅ12€!"%&/()=][#')).toEqual(['fred', 'barney', 'pebbles', 'äÄöÖåÅ12€!"%&/()=][#'])
  })

  test('Separating words with pattern', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles'])
    expect(words('fred, barney & pebbles', /[^]+/g)).toEqual(['fred, barney & pebbles']) // Match whole string
    expect(words('fred, barney & pebbles', /[]+/g)).toEqual([]) // Match nothing
    expect(words('tests are being done', 3)).toEqual([])
    expect(words('fred, barney, & pebbles, äÄöÖåÅ12€!"%&/()=][#', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles', 'äÄöÖåÅ12€!"%&/()=][#'])
  })

  test('Empty string with and without pattern', () => {
    expect(words('', /[^, ]+/g)).toEqual([])
    expect(words('')).toEqual([])
  })

  test('Number input with and without pattern', () => {
    expect(words(9000)).toThrow()
    expect(words(9000, /[]+/g)).toThrow();
  })

  test('Function input with and without pattern', () => {
    expect(words(()=> {['a','b']}, /[]+/g)).toThrow()
    expect(words(()=> {['a','b']})).toThrow()
  })

  test('Object input with and without pattern', () => {
    const obj = {name: 'Devin', occupation: 'tester'}
    expect(words(obj)).toThrow()
    expect(words(obj, /[]+/g)).toThrow()
  })
  
  test('Array input with and without pattern', () => {
    expect(words(['a', 'b'])).toThrow()
    expect(words(['a', 'b'], /[]+/g)).toThrow();
  }) 

});