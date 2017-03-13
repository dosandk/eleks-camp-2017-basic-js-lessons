/*
//1
var double = (value: number): number=> value * 2;

//2
var greey = function (name:string):void{
    if (name === undefined){
        name ="Max";
    }
    console.log("hello, " + name);
}


// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers: number[]= [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
console.log(newArray.push(...numbers));

*/



//
class Car{
    name: string;
    acceleration: number;
    honk ():void { console.log("Toooooooooot!") }
    accelerate(speed:number) {this.acceleration = this.acceleration + speed}

    constructor(name) { 
        this.name = name;
        this.acceleration = 0;
    }

}
const car = new Car("Lada");

car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...

class BaseObject{
    width: number;
    length: number;
    constructor(width = 0, length = 0){
        this.width = width; 
        this.length =  length;
    }
}

class Rectangle extends BaseObject{
    calcSize (width, length) {this.width * this.length}
}

const rectangle = new Rectangle;

console.log(rectangle.calcSize(5,2));

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
console.log(person._firstName);
person._firstName = "Se";
console.log(person._firstName);
person._firstName = "Set your firstName";
console.log(person._firstName);