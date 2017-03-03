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
      expect(a.toEvenOddStringUsingHigherOrderFunctions(
        [1, 3, 2, 8, 13, 7, 4]))
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

  describe('task06: ', () => {

    it('should combine all tasks in 1d-array', () => {
      let monday = [
        { name: 'Write a tutorial', duration: 180 },
        { name: 'Some web development', duration: 120 }
      ];
      let tuesday = [
        { name: 'Keep writing that tutorial', duration: 240 },
        { name: 'Some more web development', duration: 180 },
        { name: 'A whole lot of nothing', duration: 240 }
      ];
      let tasks = [monday, tuesday];
      expect(a.getTasksOnly(tasks)).toEqual([
        { name: 'Write a tutorial', duration: 180 },
        { name: 'Some web development', duration: 120 },
        { name: 'Keep writing that tutorial', duration: 240 },
        { name: 'Some more web development', duration: 180 },
        { name: 'A whole lot of nothing', duration: 240 }
      ]);
    });

    it('should convert minutes to hours', () => {
      let tasks = [
        { name: 'Write a tutorial', duration: 180 },
        { name: 'Some web development', duration: 120 },
        { name: 'Keep writing that tutorial', duration: 240 },
        { name: 'Some more web development', duration: 180 },
        { name: 'A whole lot of nothing', duration: 240 }
      ];
      expect(a.convertToHours(tasks)).toEqual([
        { name: 'Write a tutorial', duration: 3 },
        { name: 'Some web development', duration: 2 },
        { name: 'Keep writing that tutorial', duration: 4 },
        { name: 'Some more web development', duration: 3 },
        { name: 'A whole lot of nothing', duration: 4 }
      ]);
    });

    it('should return tasks with duration greater than 2 hours', () =>{
      let tasks = [
        { name: 'Write a tutorial', duration: 3 },
        { name: 'Some web development', duration: 2 },
        { name: 'Keep writing that tutorial', duration: 4 },
        { name: 'Some more web development', duration: 3 },
        { name: 'A whole lot of nothing', duration: 4 }
      ];
      expect(a.filterGreaterThan(tasks, 2)).toEqual([
        { name: 'Write a tutorial', duration: 3 },
        { name: 'Keep writing that tutorial', duration: 4 },
        { name: 'Some more web development', duration: 3 },
        { name: 'A whole lot of nothing', duration: 4 }
      ]);
    });

    it('should convert hours to money', () => {
      let tasks = [
        { name: 'Write a tutorial', duration: 3 },
        { name: 'Keep writing that tutorial', duration: 4 },
        { name: 'Some more web development', duration: 3 },
        { name: 'A whole lot of nothing', duration: 4 }
      ];
      expect(a.convertHoursToMoney(tasks, 15)).toEqual([
        { name: 'Write a tutorial', duration: 45 },
        { name: 'Keep writing that tutorial', duration: 60 },
        { name: 'Some more web development', duration: 45 },
        { name: 'A whole lot of nothing', duration: 60 }
      ]);
    });

    it('should add all time', () => {
      let tasks = [
        { name: 'Write a tutorial', duration: 45 },
        { name: 'Keep writing that tutorial', duration: 60 },
        { name: 'Some more web development', duration: 45 },
        { name: 'A whole lot of nothing', duration: 60 }
      ];
      expect(a.sumHours(tasks)).toBe(210);
    });

    it('should return $<amount>', () => {
      expect(a.stringifyAmount(210)).toBe('$210');
    });

    it('should return $<amount> with origin tasks', () => {
      let monday = [
        { name: 'Write a tutorial', duration: 180 },
        { name: 'Some web development', duration: 120 }
      ];
      let tuesday = [
        { name: 'Keep writing that tutorial', duration: 240 },
        { name: 'Some more web development', duration: 180 },
        { name: 'A whole lot of nothing', duration: 240 }
      ];
      let tasks = [monday, tuesday];
      expect(a.getAmountForTasks(tasks, 2, 15)).toBe('$210');
      expect(a.getAmountForTasks([[]], 2, 15)).toBe('$0');
    });
  });
});
