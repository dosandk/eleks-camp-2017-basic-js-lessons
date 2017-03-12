// Exercise 1 - How was your TypeScript Class?
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


// Exercise 2 - Two objects, based on each other ...
class baseObject{
    width: number = 0;
    length: number = 0;

    constructor (width: number, length: number) {
        this.width = width;
        this.length = length;
    }
}

class rectangle extends baseObject {
    public calcSize(): number {
       return this.width * this.length;
    }
}

let obj2 = new rectangle(5, 2);
console.log(obj2.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)

class Person {
    private _firstName: string = '';
    
    set firstName (value: string) {
        if(value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = '';
        }
    }

    get firstName (value: string) {
        return this._firstName;
    }
}

let person = new Person();

console.log(person.firstName);
person.firstName = "Se";
console.log(person.firstName);
person.firstName = "Set your firstName";
console.log(person.firstName);