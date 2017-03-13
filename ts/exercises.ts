// 1.1
let double = (value: number): number => value * 2;
console.log(double(10));

// 1.2
let greet = (name: string = 'Max'): void => {
    console.log("Hello, " + name);
};
greet();
greet("Anna");

// 1.3
let numbers: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// 1.4
let newArray: number[] = [55, 20];
console.log(newArray.push(...numbers));

// 1.5
let [result1, result2, result3]: number[] = [3.89, 2.99, 1.38];
console.log(result1, result2, result3);

// 1.6
let scientist: {
    firstName: string,
    experience: number
} = {
    firstName: "Will",
    experience: 12 
}
let {firstName, experience} = scientist;
console.log(firstName, experience);

// 2.1
class Car {
    public name: string;
    public acceleration: number = 0;
    constructor(name: string) {
        this.name = name;
    }
    public honk(): void {
        console.log("Toooooooooot!");
    }
    public accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}
let car = new Car("Lada");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// 2.2
class BaseObject {
    width: number = 0;
    length: number = 0;
    constructor (width: number, length: number) {
        this.width = width;
        this.length = length;
    }
}
class Rectangle extends BaseObject {
    public calcSize(): number {
       return this.width * this.length;
    }
}
let newRectangle = new Rectangle(5, 2);
console.log(newRectangle.calcSize());

// 2.3
class Person {
    constructor(private _firstName: string = '') {}
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

// 3.1
class MyMap<type> {
   map: object;
    constructor () {
        this.map = {};
    }
    setItem(key: string, item: type) {
        this.map[key] = item;
    }
    getItem(key: string): any {
        return this.map[key];
    }
    clear(): void {
        this.map = {};
    }
    printMap(): any {
        console.log(this.map);
    }
}
const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem('apples'));
numberMap.printMap();
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.clear();
stringMap.printMap();