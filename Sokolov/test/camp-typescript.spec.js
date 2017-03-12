///<reference path="../src/camp-typescript.ts"/>
describe('example1', () => {
  it('should return doubled number', () => {
    expect(double(4)).toBe(8);
  });

  it('should print to console greeting', () => {
    spyOn(console, 'log');
    greet();
    expect(console.log).toHaveBeenCalledWith('Hello, Max');
    greet("Anna");
    expect(console.log).toHaveBeenCalledWith('Hello, Anna');
  });
});
