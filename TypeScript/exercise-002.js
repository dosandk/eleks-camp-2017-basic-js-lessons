class Car {
    constructor(name) {
        this.acceleration = 0;
        this.name = name;
        this.honk = () => console.log("Toooooooooot!");
        this.accelerate = (speed) => this.acceleration = this.acceleration + speed;
    }
}
let car = new Car("Lada");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
class BaseObject {
    constructor(width = 0, length = 0) {
        this.width = width;
        this.length = length;
    }
}
class RectangleObj extends BaseObject {
    constructor() {
        super(...arguments);
        this.calcSize = () => this.width * this.length;
    }
}
let rectangle = new RectangleObj(5, 2);
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
