// Exercise_1
class Car {     
	name: string;     
	acceleration: number = 0; 

	constructor(name: string) {         
		this.name = name;     
	} 

	honk(): void {         
		console.log("Toooooooooot!");     
	}  

	accelerate(speed: number): void {         
		this.acceleration = this.acceleration + speed;     
	} 
} 

let car = new Car("Lada"); 
car.honk(); 
console.log(car.acceleration); 
car.accelerate(10); 
console.log(car.acceleration);

// Exercise_2
class baseObject{     
	width: number = 0;     
	length: number = 0;     

	constructor (width: number, length: number) {         
		this.width = width;         
		this.length = length;     
	} 
} 
class Rectangle extends baseObject {     
	calcSize(): number {        
		return this.width * this.length;     
	} 
} 
let rec = new Rectangle(5, 2); 
console.log(rec.calcSize());

// Exercise_3
class Person {     
	private _firstName: string = '';        

	set firstName (value: string) {         
		if(value.length > 3) {             
			this._firstName = value;         
		} 
		else {             
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