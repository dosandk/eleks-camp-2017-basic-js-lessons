// Exercise 1 - How was your TypeScript Class?

class Car {
    public name: string;
    public acceleration: number = 0;
    private speed: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    public honk() {
        console.log('tottot');
    } 

    public accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

let obj = new Car('Lada');
obj.honk();
obj.accelerate(100);
obj.accelerate(-10);
console.log(obj.acceleration);

// Exercise 2 - Two objects, based on each other ...
/*var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
console.log(rectangle.calcSize());
*/

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

let obj2 = new rectangle(2, 3);
console.log(obj2.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});

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
/*
console.log(person.firstName);
person.firstName = "Se";
console.log(person.firstName);
person.firstName = "Set your firstName";
console.log(person.firstName);*/