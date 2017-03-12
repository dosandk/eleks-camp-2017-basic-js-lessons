console.log("Exercise 2")

//1
console.log("Task 1");
class Car {
    name: string;
    public acceleration: number = 0; 

    constructor(name: string){
        this.name = name;
    }

    honk ()  {
        console.log("Toooooooooot!");
    };

    accelerate (speed: number) { 
        this.acceleration += speed;
    };
}

let car = new Car ('lada');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

//2
console.log("Task 2");
class baseObject {
    width: number = 0;
    length: number = 0;
}

class Rectangle extends baseObject {
    width = 5;
    length = 2;

    calcSize(): number {
        return this.width * this.length;
    }
}
let rectangle = new Rectangle;
console.log(rectangle.calcSize());

//3
console.log("Task 3");
class Person {
    private _firstName: string = "";

    set firstName (value: string) {
        if(value.length > 3){
         this._firstName = value;   
        }else{
            this._firstName = "";
        }
    }

    get firstName (){
        return this._firstName;
    }
}

let person = new Person;
person.firstName = "Se";
console.log(person.firstName);
person.firstName = "Set your firstName";
console.log(person.firstName);