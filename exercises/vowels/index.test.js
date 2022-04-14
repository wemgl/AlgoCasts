const vowels = require('./index');

describe('vowels', () => {
  test('Vowels is a function', () => {
    expect(typeof vowels).toEqual('function');
  });

  test('returns the number of vowels used', () => {
    expect(vowels('aeiou')).toEqual(5);
  });

  test('returns the number of vowels used when they are capitalized', () => {
    expect(vowels('AEIOU')).toEqual(5);
  });

  test('returns the number of vowels used', () => {
    expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
  });

  test('returns the number of vowels used (2)', () => {
    expect(vowels('bcdfghjkl')).toEqual(0);
  });
});
