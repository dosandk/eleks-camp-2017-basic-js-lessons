//Exercise_1
let double = (value: number):number => value*2;
console.log(double(15));

//Exercise_2
let greet = (name: string = "Max"): void => console.log(name); 
greet(); 
greet("Anna"); 

// Exercise_3
let numbers: number[] = [-3, 33, 38, 5]; 
console.log(Math.min(...numbers));

// Exercise 4
let newArray: number[] = [55, 20]; 
newArray.push(...numbers); 
console.log(newArray);

// Exercise 5
let testResults: number[] = [3.89, 2.99, 1.38],     
	[result1, result2, result3]: number[] = testResults; 
console.log(result1, result2, result3);

// Exercise 6
let scientist: {     
	firstName: string,     
	experience: number 
} = {     
	firstName: "Will",     
	experience: 12 
} 
let {firstName, experience} = scientist; 
console.log(firstName, experience); 