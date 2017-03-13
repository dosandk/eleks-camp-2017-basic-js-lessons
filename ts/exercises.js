var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1.1
var double = function (value) { return value * 2; };
console.log(double(10));
// 1.2
var greet = function (name) {
    if (name === void 0) { name = 'Max'; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
// 1.3
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// 1.4
var newArray = [55, 20];
console.log(newArray.push.apply(newArray, numbers));
// 1.5
var _a = [3.89, 2.99, 1.38], result1 = _a[0], result2 = _a[1], result3 = _a[2];
console.log(result1, result2, result3);
// 1.6
var scientist = {
    firstName: "Will",
    experience: 12
};
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
// 2.1
var Car = (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("Lada");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// 2.2
var BaseObject = (function () {
    function BaseObject(width, length) {
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
    return BaseObject;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var newRectangle = new Rectangle(5, 2);
console.log(newRectangle.calcSize());
// 2.3
var Person = (function () {
    function Person(_firstName) {
        if (_firstName === void 0) { _firstName = ''; }
        this._firstName = _firstName;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person;
console.log(person.firstName);
person.firstName = "Se";
console.log(person.firstName);
person.firstName = "Set your firstName";
console.log(person.firstName);
// 3.1
var MyMap = (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        console.log(this.map);
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem('apples'));
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.clear();
stringMap.printMap();
