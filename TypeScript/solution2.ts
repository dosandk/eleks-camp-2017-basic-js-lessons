//1

class Car{
  
    constructor ( public name: string, public acceleration: number = 0){ };
    honk() {
        console.log("Toooooooooot!");
    };
    accelerate(speed){
        this.acceleration += speed;
    }
}
let car = new Car("Lada");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

//2

class baseObject {
    constructor(public width: number = 0, public length: number = 0){}
};
class rectangleObject extends baseObject{
    calcSize() {
        return this.width * this.length;
    };
};
let rectangle = new rectangleObject(5, 5);
console.log(rectangle.calcSize());

//3

class Person {
    constructor(private _firstName: string = ""){}
get firstName(){
    return this._firstName;
}
set firstName (value: string){
    if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        };
    };
};
let person = new Person();
console.log(person.firstName);
person.firstName = "Se";
console.log(person.firstName);
person.firstName = "Set your firstName";
console.log(person.firstName);