// Exercise 1 - How was your TypeScript Class?
class Car {
    constructor(public name: string, public acceleration: number = 0) { }
    honk() {
        console.log('Toooooooooooot!');
    }
    accelerate(speed: number) {
        this.acceleration += speed;
    }
}
let car = new Car("Lada");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class BaseObject {
    constructor(public width: number = 0, public length: number = 0) { }
}
class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length
    };
}
let rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
function configurable(bool: boolean) {
    return function (
        target: any,
        propName: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.configurable = bool;
    }
}

function enumerable(bool: boolean) {
    return function (
        target: any,
        propName: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = bool;
    }
}

class Person {
    constructor(private _firstName: string = '') { }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
}
let person = new Person;
console.log(person.firstName);
person.firstName = "Se";
console.log(person.firstName);
person.firstName = "Set your firstName";
console.log(person.firstName);
