let double = (value:number): number => value * 2;
console.log(double(10));

//===============================================
let greet = (name:string = 'Max'):void =>  
    {console.log("Hello, " + name)};

greet();
greet("Anna");

//===============================================
let numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

//===============================================

let newArray:number[] = [55, 20];
console.log(newArray.push(...numbers));

//===============================================

var testResults:number[] = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

//===============================================

let scientist: {firstName: string, experience: number}= {firstName: "Will", experience: 12};
let {firstName, experience} = scientist;
console.log(firstName, experience);
