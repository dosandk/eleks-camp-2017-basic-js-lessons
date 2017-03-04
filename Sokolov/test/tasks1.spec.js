describe("basic-js tasks:", () => {
  var vs = vsModule;
  describe("repeat(str)", () => {
    it("should repeat string n times", () => {
      expect(vs.repeat('a', 5)).toBe('aaaaa');
      expect(vs.repeat('a', 0)).toBe('');
      expect(vs.repeat('hello', 2)).toBe('hellohello');
    });
  });

  describe("ucFirst*(str)", () => {
    it("should capitalize a word", () => {
      expect(vs.ucFirst("john")).toBe('John');
      expect(vs.ucFirst(" john")).toBe('John');
      expect(vs.ucFirst("вася")).toBe("Вася");
      expect(vs.ucFirst("")).toBe("");

      expect(vs.ucFirstUsingArray("john")).toBe('John');
      expect(vs.ucFirstUsingArray(" john")).toBe('John');
      expect(vs.ucFirstUsingArray("вася")).toBe("Вася");
      expect(vs.ucFirstUsingArray("")).toBe("");
    });
  });

  describe("turnMeBaby(str)", () => {
    it("should reverse a string", () => {
      expect(vs.turnMeBaby("abc")).toBe("cba");
      expect(vs.turnMeBaby("Hello world")).toBe("dlrow olleH");
    });
  });

  describe("raiseToPower(num, power)", () => {
    it("should raise to the nth power", () => {
      expect(vs.raiseToPower(5, 2)).toBe(25);
      expect(vs.raiseToPower(10, 1)).toBe(10);
      expect(vs.raiseToPower(3, 0)).toBe(1);
    });
  });

  describe("trancate(str, maxlength)", () => {
    it("should truncate a string", () => {
      expect(vs.truncate("foo bar", 3)).toBe("foo...");
      expect(vs.truncate("foo bar", 7)).toBe("foo bar");
    });
  });

  describe("countWords*(str)", () => {
    it("should return number of words in the string", () => {
      expect(vs.countWords("foo bar")).toBe(2);
      expect(vs.countWords("foo")).toBe(1);
      expect(vs.countWords(" ")).toBe(0);
      expect(vs.countWords("\nfoo\n\t  bar  baz")).toBe(3);

      expect(vs.countWordsUsingRegexp("foo bar")).toBe(2);
      expect(vs.countWordsUsingRegexp("foo")).toBe(1);
      expect(vs.countWordsUsingRegexp(" ")).toBe(0);
      expect(vs.countWordsUsingRegexp("\nfoo\n\t  bar  baz")).toBe(3);
      expect(vs.countWordsUsingRegexp("а б в")).toBe(3);
      expect(vs.countWordsUsingRegexp("okey-dokey")).toBe(1);
    });
  });

  describe("multiTable()", () => {
    it('should print the multiplication table', () => {
      expect(vs.multiTable()).toMatch(/^1\s*\*\s*1\s*=\s*1;/);
      expect(vs.multiTable()).toMatch(/9\s*\*\s*9\s*=\s*81;/);
    });

    it('should print a part of the multiplication table', () => {
      expect(vs.multiTable(2, 1)).toMatch(/^2 \* 1 = 2;/);
      expect(vs.multiTable(10, 1)).toBe('');
      expect(vs.multiTable(0, 1)).toBe('');
      expect(vs.multiTable(5, 10)).toMatch(/5 \* 5 = 25;/);
    });
  });

  describe('doubleNum(num)', () => {
    it('should multiply number by 2', () => {
      expect(vs.doubleNum(2)).toBe(4);
      expect(vs.doubleNum(6)).toBe(12);
      expect(vs.doubleNum(111)).toBe(222);
      expect(vs.doubleNum(2002)).toBe(4004);
    });

    it('should not multiply when repeated number', () => {
      expect(vs.doubleNum(66)).toBe(66);
      expect(vs.doubleNum(4343)).toBe(4343);
      expect(vs.doubleNum(100100)).toBe(100100);
      expect(vs.doubleNum(111111)).toBe(111111);
    });
  });
  describe('dragonCurve(n)', () => {
    it('should bend the dragon curve n times', () => {
      expect(vs.dragonCurve(1)).toBe('1');
      expect(vs.dragonCurve(2)).toBe('110');
      expect(vs.dragonCurve(3)).toBe('1101100');
      expect(vs.dragonCurve(4)).toBe('110110011100100');
      expect(vs.dragonCurve(5)).toBe('1101100111001001110110001100100');
    });
  });
});
