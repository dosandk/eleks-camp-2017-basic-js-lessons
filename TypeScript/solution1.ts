//1

let double = (value: number) : number => value * 2;

console.log(double(10));

//2

let greet = (name: string = "Max") => {
    console.log("Hello " + name);
};
greet();
greet("asd");

//3

let numbers: number[] = [-5, 33, 38, 5];
console.log(Math.min(... numbers));

//4

let newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

//5

let testResults: number[] = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

//6

type Scientist = {
    firstName: string, 
    experience: number
};
let scientist: Scientist = {
    firstName: "asd",
    experience: 123
};
console.log(scientist);