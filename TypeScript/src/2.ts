//Exercise 1
class Car {
    name: string;
    acceleration: number = 0;
    constructor(name: string) {
        this.name = name;
    };
    public honk(): void {
        console.log('Toooooooooot!');
    };
    public accelerate(speed: number): void {
        this.acceleration += speed;
    }
}
let car = new Car('Lada');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

//Exercise 2
abstract class Obj {
    width: number;
    length: number;
}
class BaseObj extends Obj {
    constructor(width: number, length: number) {
        super();
        this.width = width;
        this.length = length;
    }
}
class Rectangle extends Obj {
    constructor(width: number, length: number) {
        super();
        this.width = width;
        this.length = length;
    }
    public calcSize(): number {
        return this.width * this.length;
    }
}
let baseObj = new BaseObj(0, 0);
let rectangle = new Rectangle(5, 3);
console.log(rectangle.calcSize());

//Exercise 3
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}
function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}
class Person {
    private _firstName: string = '';

    @enumerable(true)
    @configurable(true)
    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value.length > 3 ? value : '';
    }
}
let person = new Person();
console.log(person.firstName);
person.firstName = 'Se';
console.log(person.firstName);
person.firstName = 'Set your first name';
console.log(person.firstName);
