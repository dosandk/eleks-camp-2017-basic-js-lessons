// Exercise 1 - Maybe use an Arrow Function?
let double = (value: number): number => {
    return value * 2;
}
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
let greet = (name: string ="Max"): string =>{
    return ("Hello, " + name);
};
console.log(greet());
console.log(greet("Anna"));

// Exercise 3 - Isn't there a shorter way to get all these Values?
let numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4 - I have to think about Exercise 3 ...
let newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
let testResults = [3.89, 2.99, 1.38];
let result1, result2, result3;
[result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
interface man {
    firstName: string;
     experience: number;
}
const scientist: man = {
    firstName: "Will", 
    experience: 12
};
console.log(scientist.firstName, scientist.experience);



