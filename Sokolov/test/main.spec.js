describe("basic-js examples", function() {
  it("should repeat string n times", function() {
    expect(repeat('a', 5)).toBe('aaaaa');
    expect(repeat('a', 0)).toBe('');
    expect(repeat('hello', 2)).toBe('hellohello');
  });

  it("should capitalize a word", function() {
    expect(ucFirst("john")).toBe('John');
    expect(ucFirst(" john")).toBe('John');
    expect(ucFirst("вася")).toBe("Вася");
    expect(ucFirst("")).toBe("");
  });

  it("should reverse a string", function() {
    expect(turnMeBaby("abc")).toBe("cba");
    expect(turnMeBaby("Hello world")).toBe("dlrow olleH");
  });

  it("should raise to the nth power", function() {
    expect(raiseToPower(5, 2)).toBe(25);
    expect(raiseToPower(10, 1)).toBe(10);
    expect(raiseToPower(3, 0)).toBe(1);
  });

  it("should truncate a string", function() {
    expect(truncate("foo bar", 3)).toBe("foo...");
    expect(truncate("foo bar", 7)).toBe("foo bar");
  });

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
