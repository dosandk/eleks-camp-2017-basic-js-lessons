describe('arrays: ', () => {
  var a = arrModule;
  describe('task01', () => {
    var arr, res;

    beforeEach(() => {
      arr = [1, 2, 3];
    });

    it('should append element & return new array', () => {
      expect(a.push(arr, 4)).toEqual([1, 2, 3, 4]);
      expect(arr).toEqual([1, 2, 3]);

      expect(a.push2(arr, 4)).toEqual([1, 2, 3, 4]);
      expect(arr).toEqual([1, 2, 3]);

      expect(a.push3(arr, 4)).toEqual([1, 2, 3, 4]);
      expect(arr).toEqual([1, 2, 3]);

      arr = [];
      expect(a.push(arr, 'foo')).toEqual(['foo']);
      expect(arr).toEqual([]);

      expect(a.push(arr, 'f', 'o', 'o')).toEqual(['f', 'o', 'o']);
      expect(arr).toEqual([]);
    });

    it('should pop element & return new array', () => {
      expect(a.pop(arr)).toEqual([1, 2]);
      expect(arr).toEqual([1, 2, 3]);

      expect(a.pop([])).toEqual([]);
    });

    it('should remove first element from the array', () => {
      expect(a.shift(arr)).toEqual([2, 3]);
      expect(arr).toEqual([1, 2, 3]);
    });

    it('should add first element', () => {
      expect(a.unshift(arr, 4)).toEqual([4, 1, 2, 3]);
      expect(arr).toEqual([1, 2, 3]);

      expect(a.unshift(arr, 4, 5)).toEqual([4, 5, 1, 2, 3]);
      expect(arr).toEqual([1, 2, 3]);
    });

    it('should remove element by index', () => {
      expect(a.remove(arr, 1)).toEqual([1, 3]);
      expect(arr).toEqual([1, 2, 3]);
    });

    it('should swap elements', () => {
      expect(a.swapWithPrevious(arr, 1)).toEqual([2, 1, 3]);
      expect(arr).toEqual([1, 2, 3]);

      expect(a.swapWithNext(arr, 1)).toEqual([1, 3, 2]);
      expect(arr).toEqual([1, 2, 3]);
    });
  });

  describe('task02:', () => {
    it('should return intersection of arrays', () => {
      expect(a.intersection([2, 3, 1], [1, 3, 5])).toEqual([1, 3]);
    });
  });

  describe('task03:', () => {
    it('should get number of latin vowels', () => {
      expect(a.vowelCount('Hello WORLD!')).toBe(3);
      expect(a.vowelCount('foo')).toBe(2);
      expect(a.vowelCount('f')).toBe(0);
    });
  });

  describe('task04:', () => {
    it('should sort even and odd numbers', () => {
      expect(a.toEvenOddString([1, 3, 2, 8, 13, 7, 4]))
        .toEqual('24813731');
      expect(a.toEvenOddStringUsingNot([1, 3, 2, 8, 13, 7, 4]))
        .toEqual('24813731');
    });
  });

  describe('task05:', () => {
    it('should return 1d array from 2d-arr', () => {
      expect(a.snail([[]])).toEqual([]);
      expect(a.snail([[1, 2, 3]])).toEqual([1, 2, 3]);

      expect(a.snail([[1, 2], [3, 4]])).toEqual([1, 2, 4, 3]);

      arr = [
        [1, 2, 3, 4, 5],
        [12, 13, 14, 15, 6],
        [11, 10, 9, 8, 7]
      ];
      expect(a.snail(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                                    12, 13, 14, 15]);
    });
  });
});
