// Exercise 1 - How was your TypeScript Class?
class Car {
    name:string;
    acceleration:number = 0;
    constructor(name:string) {
        this.name = name;
    }
    honk = ():void => console.log("Toooooooooot!");
    accelerate = (speed:number) => this.acceleration += speed;
        
}
var car = new Car("Lada");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class baseObject {
    width:number;
    length:number;
    constructor(width = 0, length = 0){
        this.width = width;
        this.length = length;
    }
}
class Rectangle extends baseObject {
    constructor() {
        super(...arguments);
        this.calcSize = function() {
        return this.width * this.length;
        }
    }
}
let rectangle = new Rectangle(5,2);
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
    private _firstName:string = " ";
    get firstName() {return this._firstName};
    set firstName(value:string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = " ";
        }
    }
}
let person = new Person();
console.log(person.firstName);
person.firstName = "Se";
console.log(person.firstName);
person.firstName = "Set your firstName";
console.log(person.firstName);

