let arr1 = [2, 3, 5, 2, 1, 5],
    arr2 = [4, 4, 5, 3, 1, 0];

// task-1
let ImmutableArray = {
    push: function(arr, el){
        let newArray = [];
        arr.forEach(x => newArray.push(x));
        newArray.push(el);
        return newArray;
    },
    pop: function(arr){
        let newArray = [];
        arr.forEach(x => newArray.push(x));
        newArray.pop();
        return newArray;
    }
}

// task 2, intersection of arrays
function intersection(arr1, arr2) {
    let setArray = new Set();
    arr1.forEach(el => {
       if(arr2.includes(el)) {
           setArray.add(el);
       }
    });
    return Array.from(setArray);
}
// console.log(intersection(arr1, arr2));

// task 3
function vowelCount(str) {
    let transitiveArray = str.split('');
    let regex = (/^[aeiou]$/i);
    let counter = 0;
    transitiveArray.forEach(letter => {
        if(regex.test(letter)) {
            counter++;
        }
    });
    return counter;
}
// console.log(vowelCount('Lewis'));

// task 4
function toEvenOddString(arr) {
    let even = [],
        odd = [];
    arr.forEach(el => {
        if((el % 2) == 0){
            even.push(el);
        } else {
            odd.push(el);
        }
    });
    even.sort((a, b) => a - b);
    odd.sort((a, b) => b - a);
    return even.concat(odd).join('');
}
//console.log(toEvenOddString([1, 3, 2, 8, 13, 7, 4]));