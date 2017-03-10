// Exercise 1
var double = function (value) { return value * 2; };
console.log(double(10));
//Exercise 2
var greet = function (name) {
    if (name === void 0) { name = 'Max'; }
    return console.log("Hello, " + name);
};
greet();
greet('Anna');
//Exercise 3
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
//Exercise 4
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
//Exercise 5
var _a = [3.89, 2.99, 1.38], result1 = _a[0], result2 = _a[1], result3 = _a[2];
console.log(result1, result2, result3);
;
var scientist = { firstName: "Will", experience: 12 };
var obj = scientist;
console.log(obj.firstName, obj.experience);
