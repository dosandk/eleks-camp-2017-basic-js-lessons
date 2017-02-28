let arr1 = [2, 3, 5, 2, 1, 5],
    arr2 = [4, 4, 5, 3, 1, 0];

// task-1
let ImmutableArray = {
    push: function(arr, el){
        let tempArray = arr.map(x => x);
        tempArray.push(el);
        return tempArray;
    },
    pop: function(arr){
        let tempArray = arr.map(x => x);
        tempArray.pop();
        return tempArray;
    },
    // what does this function need to return array or element?
    shift: function(arr) {
        let tempArray = arr.map(x => x);
        tempArray.shift();
        return tempArray;
    },
    unshift: function(arr, el) {
        let tempArray = arr.map(x => x);
        tempArray.unshift(el);
        return tempArray;
    },
    remove: function(arr, index) {
        let tempArray = arr.map(x => x);
        tempArray.splice(index, 1);
        return tempArray;
    },
    insert: function(arr, el, index) {
        let tempArray = arr.map(x => x);
        tempArray.splice(index, 0, el);
        return tempArray;
    },
    swapWithPrevious: function(arr, index) {
        let tempVar;
        let tempArray = arr.map(x => x);
        tempVar = tempArray[index];
        tempArray[index] = tempArray[index - 1];
        tempArray[index - 1] = tempVar;
        return tempArray;
    },
    swapWithNext: function(arr, index) {
        let tempVar;
        let tempArray = arr.map(x => x);
        tempVar = tempArray[index];
        tempArray[index] = tempArray[index + 1];
        tempArray[index + 1] = tempVar;
        return tempArray;
    }
}
//console.log(ImmutableArray.push(arr1, 's'));
//console.log(ImmutableArray.pop(arr1));
//console.log(ImmutableArray.shift(arr1));
//console.log(ImmutableArray.unshift(arr1, 1));
//console.log(ImmutableArray.remove(arr1, 2));
//console.log(ImmutableArray.insert(arr1, 9, 3));
//console.log(ImmutableArray.swapWithPrevious(arr1, 3));
console.log(ImmutableArray.swapWithNext(arr1, 3));
console.log(arr1);

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