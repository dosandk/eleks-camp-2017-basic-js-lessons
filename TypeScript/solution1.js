//1
var double = function (value) { return value * 2; };
console.log(double(10));
//2
var greet = function (name) {
    if (name === void 0) { name = "Max"; }
    console.log("Hello " + name);
};
greet();
greet("asd");
//3
var numbers = [-5, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
//4
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
//5
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
var scientist = {
    firstName: "asd",
    experience: 123
};
console.log(scientist);
