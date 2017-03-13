// Exercise-001.js

// Exercise 1 - Maybe use an Arrow Function?
var double = (value:number): number => value * 2;
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
var greet = (name: string = "Max"):void => {
    console.log(`Hello, ${name}`);
};
greet();
greet("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
var minNumber = Math.min(...numbers);
console.log(minNumber);
console.assert(minNumber === -3);

// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push(...numbers)
console.log(newArray);
console.assert(JSON.stringify(newArray) === JSON.stringify(
    [55, 20, -3, 33, 38, 5]));

// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var [result1, result2, result3] = testResults;
console.log(result1, result2, result3);
console.assert(result1 === 3.89 && result2 === 2.99 && result3 === 1.38);

// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
var {firstName, experience} = scientist;
console.log(firstName, experience);
console.assert(firstName === "Will" && experience === 12);

// Exercise-002.js

// Exercise 1 - How was your TypeScript Class?
class Car {
    acceleration: number = 0;

    constructor(public name: string) {}

    honk(): void {
        console.log("Toooooooooot!");
    }

    accelerate(speed: number): void {
        this.acceleration += speed;
    }
}
var car = new Car("Lada");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...

class BaseObject {
    width: number = 0;
    length: number = 0;
}

class Rectangle extends BaseObject {
    constructor() {
        super();
    }

    calcSize(): number {
        return this.width * this.length;
    }
}

var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log("Rectangle:", rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)

class Person {
    private _firstName: string = "";

    @enumerable(true)
    @configurable(true)
    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }
}

function enumerable(bool: boolean) {
    return function(target: any, propName: string,
                    descriptor: PropertyDescriptor) {
        descriptor.enumerable = bool;
    };
}

function configurable(bool: boolean) {
    return function(target: any, propName: string,
                    descriptor: PropertyDescriptor) {
        descriptor.configurable = bool;
    }
}

var person = new Person();
console.log(person.firstName);
person.firstName = "Se";
console.log(person.firstName);
person.firstName = "Set your firstName";
console.log(person.firstName);
// var res = Object.getOwnPropertyDescriptor(
//     Object.getPrototypeOf(person), 'firstName');
// console.log(res);
// person._firstName = "hello";


// Exercise-003.js


// Let's keep it simple and only add the following methods to the Map:
//
// setItem(key: string, item: T) // should create a new key-value pair
//
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below:

class MyMap<T extends number | string> {

    private _map: { [key: string]: T; } = {};

    getItem(key: string): T {
        return this._map[key];
    }

    setItem(key: string, value: T){
        this._map[key] = value;
    }

    clear() {
        this._map = {};
    }

    printMap(): void {
        for (let k of Object.keys(this._map)) {
            console.log(k, "=>", this._map[k]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
