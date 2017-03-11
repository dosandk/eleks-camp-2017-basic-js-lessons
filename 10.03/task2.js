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
