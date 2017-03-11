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

let rectangle1 = new Base(5,2);
console.log(rectangle1.calcSise());