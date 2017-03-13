//1
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
    function Car(name, acceleration) {
        if (acceleration === void 0) { acceleration = 0; }
        this.name = name;
        this.acceleration = acceleration;
    }
    ;
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    ;
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car("Lada");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
//2
var baseObject = (function () {
    function baseObject(width, length) {
        if (width === void 0) { width = 0; }
        if (length === void 0) { length = 0; }
        this.width = width;
        this.length = length;
    }
    return baseObject;
}());
;
var rectangleObject = (function (_super) {
    __extends(rectangleObject, _super);
    function rectangleObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    rectangleObject.prototype.calcSize = function () {
        return this.width * this.length;
    };
    ;
    return rectangleObject;
}(baseObject));
;
var rectangle = new rectangleObject(5, 5);
console.log(rectangle.calcSize());
//3
var Person = (function () {
    function Person(_firstName) {
        if (_firstName === void 0) { _firstName = ""; }
        this._firstName = _firstName;
    }
    Object.defineProperty(Person.prototype, "firstName", {
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
            ;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Person;
}());
;
var person = new Person();
console.log(person.firstName);
person.firstName = "Se";
console.log(person.firstName);
person.firstName = "Set your firstName";
console.log(person.firstName);
