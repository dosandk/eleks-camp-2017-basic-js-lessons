// Exercise 1 - How was your TypeScript Class?
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
var Car = (function () {
    function Car(name) {
        this.acceleration = 0;
        this.speed = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log('tottot');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var obj = new Car('Lada');
obj.honk();
obj.accelerate(100);
obj.accelerate(-10);
console.log(obj.acceleration);
// Exercise 2 - Two objects, based on each other ...
/*var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
console.log(rectangle.calcSize());
*/
var baseObject = (function () {
    function baseObject(width, length) {
        this.width = 2;
        this.length = 3;
        this.width = width;
        this.length = length;
    }
    return baseObject;
}());
var rectangle = (function (_super) {
    __extends(rectangle, _super);
    function rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return rectangle;
}(baseObject));
var obj2 = new rectangle(2, 3);
console.log(obj2.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
/*
console.log(person.firstName);
person.firstName = "Se";
console.log(person.firstName);
person.firstName = "Set your firstName";
console.log(person.firstName);*/ 
