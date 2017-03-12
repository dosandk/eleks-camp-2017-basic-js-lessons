// Exercise 1 - Maybe use an Arrow Function?
let double = (value: number): number => value *2;

// Exercise 2 - If only we could provide some default values...
let greet = (name: string = "Max"): string => "Hello, " + name;
console.log(greet());


// Exercise 3 - Isn't there a shorter way to get all these Values?
let numbers: number[] = [-3, 33, 38, 5];
let numbers1 = (numbers: number) => Math.min(...numbers);


// Exercise 4 - I have to think about Exercise 3 ...
//var newArray = [55, 20];

let newArray = [55, 20];
newArray.push(numbers);



// Exercise 5 - That's a well-constructed array.
let testResults = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
let scientist : {
    firstName: string,
    experience: number
} = {
    firstName: 'Max',
    experience: 22
};
let {firstName, experience} = scientist;

console.log(firstName, experience);

