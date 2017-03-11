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



