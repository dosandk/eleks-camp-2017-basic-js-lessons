describe("basic-js tasks:", function() {
  describe("repeat(str)", function() {
    it("should repeat string n times", function() {
      expect(repeat('a', 5)).toBe('aaaaa');
      expect(repeat('a', 0)).toBe('');
      expect(repeat('hello', 2)).toBe('hellohello');
    });
  });

  describe("ucFirst*(str)", function() {
    it("should capitalize a word", function() {
      expect(ucFirst("john")).toBe('John');
      expect(ucFirst(" john")).toBe('John');
      expect(ucFirst("вася")).toBe("Вася");
      expect(ucFirst("")).toBe("");

      expect(ucFirstUsingArray("john")).toBe('John');
      expect(ucFirstUsingArray(" john")).toBe('John');
      expect(ucFirstUsingArray("вася")).toBe("Вася");
      expect(ucFirstUsingArray("")).toBe("");
    });
  });

  describe("turnMeBaby(str)", function() {
    it("should reverse a string", function() {
      expect(turnMeBaby("abc")).toBe("cba");
      expect(turnMeBaby("Hello world")).toBe("dlrow olleH");
    });
  });

  describe("raiseToPower(num, power)", function() {
    it("should raise to the nth power", function() {
      expect(raiseToPower(5, 2)).toBe(25);
      expect(raiseToPower(10, 1)).toBe(10);
      expect(raiseToPower(3, 0)).toBe(1);
    });
  });

  describe("trancate(str, maxlength)", function() {
    it("should truncate a string", function() {
      expect(truncate("foo bar", 3)).toBe("foo...");
      expect(truncate("foo bar", 7)).toBe("foo bar");
    });
  });

  describe("countWords*(str)", function() {
    it("should return number of words in the string", function() {
      expect(countWords("foo bar")).toBe(2);
      expect(countWords("foo")).toBe(1);
      expect(countWords(" ")).toBe(0);
      expect(countWords("\nfoo\n\t  bar  baz")).toBe(3);

      expect(countWordsUsingRegexp("foo bar")).toBe(2);
      expect(countWordsUsingRegexp("foo")).toBe(1);
      expect(countWordsUsingRegexp(" ")).toBe(0);
      expect(countWordsUsingRegexp("\nfoo\n\t  bar  baz")).toBe(3);
      expect(countWordsUsingRegexp("а б в")).toBe(3);
    });
  });

  describe("multiTable()", function() {
    it('should print the multiplication table', function() {
      expect(multiTable()).toMatch(/^1\s*\*\s*1\s*=\s*1;/);
      expect(multiTable()).toMatch(/9\s*\*\s*9\s*=\s*81;/);
    });

    it('should print a part of the multiplication table', function() {
      expect(multiTable(2, 1)).toMatch(/^2 \* 1 = 2;/);
      expect(multiTable(10, 1)).toBe('');
      expect(multiTable(0, 1)).toBe('');
      expect(multiTable(5, 10)).toMatch(/5 \* 5 = 25;/);
    });
  });

  describe('doubleNum(num)', function() {
    it('should multiply number by 2', function() {
      expect(doubleNum(2)).toBe(4);
      expect(doubleNum(6)).toBe(12);
      expect(doubleNum(111)).toBe(222);
      expect(doubleNum(2002)).toBe(4004);
    });

    it('should not multiply when repeated number', function() {
      expect(doubleNum(66)).toBe(66);
      expect(doubleNum(4343)).toBe(4343);
      expect(doubleNum(100100)).toBe(100100);
      expect(doubleNum(111111)).toBe(111111);
    });
  });
});
