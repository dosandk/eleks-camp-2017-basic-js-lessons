class Car {
    constructor(name) {
        this.name = name;
        this.acceleration = 0;
        this.honk = () => console.log("Toooooooooot!");
        this.accelerate = (speed) => this.acceleration = this.acceleration + speed;
    }
}
let car = new Car("Lada");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
const doubleFunc = function (num1, num2) {
    return (num1 + num2) * 2;
};
console.log(doubleFunc(10, 20));
let baseObject = {
    width: 0,
    length: 0
};
let rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize());
class Person {
    constructor() {
        this._firstName = "";
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}
;
let person = new Person();
console.log(person.firstName);
person.firstName = "Se";
console.log(person.firstName);
person.firstName = "Set your firstName";
console.log(person.firstName);
