// Exercise 1 - How was your TypeScript Class?
class Car {
    name: string;
    acceleration: number;
    honk: any;
    accelerate: any;

    constructor(name: string) {
        this.name = name;
        this.acceleration = 0;

        this.honk = (): void => console.log("Toooooooooot!");

        this.accelerate = (speed: number): number => this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("Lada");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

const doubleFunc: DoubleValueFunc = function(
    num1: number,
    num2: number
) {
    return (num1 + num2) * 2;
};

console.log(doubleFunc(10, 20));

// Exercise 2 - Two objects, based on each other ...
type baseObj = {
    width: number,
    length: number,
    [propName: string]: any
}

let baseObject: baseObj = {
    width: 0,
    length: 0
};

let rectangle: baseObj = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
    private _firstName: string = "";

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
};
let person = new Person();
console.log(person.firstName);
person.firstName = "Se";
console.log(person.firstName);
person.firstName = "Set your firstName";
console.log(person.firstName);
