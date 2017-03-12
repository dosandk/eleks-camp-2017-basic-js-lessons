// Exercise 1 - How was your TypeScript Class?
class Car {
    name: string;
    accelerate: number;
    constructor (name: string, speed: number = 0){
        this.name = name;
        this.accelerate = speed;
    }
    honk(){
         console.log("Tooooot!");
    }
    accelerateM(speed){
        return (this.accelerate = this.accelerate + speed);
    }
};

let car = new Car("Lada"); 
car.honk();
console.log(car.accelerate);
car.accelerateM(5);
console.log(car.accelerate); 

// Exercise 2 - Two objects, based on each other ...
class Base {
    width: number;
    length: number;
        constructor(width: number, length: number){
            this.width = width;
            this.length = length;
            }
    calcSise(){
        return this.width*this.length;
    }
}

//
class Person {
   private _firstName: string = "";
    
    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }
    
    get firstName() {
        return this._firstName;
    }
};

let person = new Person();
console.log(person.firstName);
person.firstName = "Se";
console.log(person.firstName);
person.firstName = "Set your firstName";
console.log(person.firstName);