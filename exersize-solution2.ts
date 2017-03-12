// Exercise 1 - How was your TypeScript Class?

class Car {
    public name: string
    public acceleration: number
    constructor(name: string) {
        this.name = name;
        this.acceleration = 0;
    }

    honk() {
        console.log("Toooooooooot!");
    };

    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("Lada");
car.honk();
console.log(car.acceleration);

car.accelerate(10);
console.log(car.acceleration);


// Exercise 2 - Two objects, based on each other ...

abstract class BaseObject {
    constructor(public width: number = 0, public length: number = 0) {}
    
    abstract calcSize(): number;
}

class Rectangle extends BaseObject {
    
    calcSize(): number {
        return this.width * this.length;
    }
}

var baseObject = new Rectangle();

var rectangle = new Rectangle(5,2);
console.log(rectangle.calcSize());

// interface IBaseObject {
//     width: number;
//     length: number;

//     calcSize(): number;
// }

// let baseObject: IBaseObject = {
//     width: 0,
//     length: 0,

//     calcSize(): number {
//         return this.width * this.length;
//     }
// }

// class Rectangle implements IBaseObject {
//     constructor(public width: number = 0, public length: number = 0) {}

//     calcSize(): number {
//         return this.width * this.length;
//     }
// }

// let rectangle = new Rectangle(5,2);
// console.log(rectangle.calcSize());


// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)

class Person {
    private _firstName: string = "";

    set firstName(value: string) {
        if ( value.length > 3 ) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }

    get firstName(): string {
        return this._firstName;
    }
}

let person = new Person();
console.log(person.firstName);

person.firstName = "Se";
console.log(person.firstName);

person.firstName = "Set your firstName";
console.log(person.firstName);


