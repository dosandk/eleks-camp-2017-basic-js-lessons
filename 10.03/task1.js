// Exercise 1 - Maybe use an Arrow Function?
var double = function (value) {
    return value * 2;
};
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === void 0) { name = "Max"; }
    return ("Hello, " + name);
};
console.log(greet());
console.log(greet("Anna"));
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1, result2, result3;
result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
var scientist = {
    firstName: "Will",
    experience: 12
};
console.log(scientist.firstName, scientist.experience);
