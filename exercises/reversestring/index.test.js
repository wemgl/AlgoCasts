const reverse = require('./index');

describe('reverse', () => {
  test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
  });

  test('Reverse reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
  });

  test('Reverse reverses a string with spaces', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
  });
});
