const matrix = require('./index');

describe('matrix', () => {
  test('matrix is a function', () => {
    expect(typeof matrix).toEqual('function');
  });

  test('matrix produces a 2x2 array', () => {
    const m = matrix(2);
    expect(m.length).toEqual(2);
    expect(m[0]).toEqual([1, 2]);
    expect(m[1]).toEqual([4, 3]);
  });

  test('matrix produces a 3x3 array', () => {
    const m = matrix(3);
    expect(m.length).toEqual(3);
    expect(m[0]).toEqual([1, 2, 3]);
    expect(m[1]).toEqual([8, 9, 4]);
    expect(m[2]).toEqual([7, 6, 5]);
  });

  test('matrix produces a 4x4 array', () => {
    const m = matrix(4);
    expect(m.length).toEqual(4);
    expect(m[0]).toEqual([1, 2, 3, 4]);
    expect(m[1]).toEqual([12, 13, 14, 5]);
    expect(m[2]).toEqual([11, 16, 15, 6]);
    expect(m[3]).toEqual([10, 9, 8, 7]);
  });

  test('matrix produces a 5x5 array', () => {
    const m = matrix(5);
    expect(m.length).toEqual(5);
    expect(m[0]).toEqual([1, 2, 3, 4, 5]);
    expect(m[1]).toEqual([16, 17, 18, 19, 6]);
    expect(m[2]).toEqual([15, 24, 25, 20, 7]);
    expect(m[3]).toEqual([14, 23, 22, 21, 8]);
    expect(m[4]).toEqual([13, 12, 11, 10, 9]);
  });

  test('matrix produces a 6x6 array', () => {
    const m = matrix(6);
    expect(m.length).toEqual(6);
    expect(m[0]).toEqual([1, 2, 3, 4, 5, 6]);
    expect(m[1]).toEqual([20, 21, 22, 23, 24, 7]);
    expect(m[2]).toEqual([19, 32, 33, 34, 25, 8]);
    expect(m[3]).toEqual([18, 31, 36, 35, 26, 9]);
    expect(m[4]).toEqual([17, 30, 29, 28, 27, 10]);
    expect(m[5]).toEqual([16, 15, 14, 13, 12, 11]);
  });
});
