// Exercise 1 - How was your TypeScript Class?
var Car = (function () {
    function Car(name, speed) {
        if (speed === void 0) { speed = 0; }
        this.name = name;
        this.accelerate = speed;
    }
    Car.prototype.honk = function () {
        console.log("Tooooot!");
    };
    Car.prototype.accelerateM = function (speed) {
        return (this.accelerate = this.accelerate + speed);
    };
    return Car;
}());
;
var car = new Car("Lada");
car.honk();
console.log(car.accelerate);
car.accelerateM(5);
console.log(car.accelerate);
// Exercise 2 - Two objects, based on each other ...
var Base = (function () {
    function Base(width, length) {
        this.width = width;
        this.length = length;
    }
    Base.prototype.calcSise = function () {
        return this.width * this.length;
    };
    return Base;
}());
var rectangle1 = new Base(5, 2);
console.log(rectangle1.calcSise());
