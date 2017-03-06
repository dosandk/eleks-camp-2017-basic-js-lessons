let arr1 = [2, 3, 5, 2, 1, 5],
    arr2 = [4, 4, 5, 3, 1, 0];

// task-1
let ImmutableArray = {
    push: function(arr, el) {
        return arr.concat(el);
    },
    pop: function(arr) {
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
        return [el].concat(arr);
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
        return this.swapMain(arr, index, '-');
    },
    swapWithNext: function(arr, index) {
        return this.swapMain(arr, index, '+');
    },
    swapMain: function(arr, index, sign) {
        let tempVar;
        let tempArray = arr.map(x => x);
        tempVar = tempArray[index];
        if(sign == '+') {
            tempArray[index] = tempArray[index + 1];
            tempArray[index + 1] = tempVar;
        } else {
            tempArray[index] = tempArray[index - 1];
            tempArray[index - 1] = tempVar;
        }    
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
//console.log(ImmutableArray.swapWithNext(arr1, 3));
//console.log(arr1);

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

// task 5, snail
let matrix = [
                [ 1,  2,  3,  4, 5],
                [12, 13, 14, 15, 6],
                [11, 10,  9,  8, 7]
            ];

function rotate(arr) {
    let tempArr = [];
    arr.forEach(arrEl => {
        arrEl.forEach(el => {
            // calculate new row, to push elems
            let newRow = ((arrEl.length - 1) - arrEl.indexOf(el));
            if(tempArr.length -1 < arrEl.indexOf(el)){
                /* if array with element index is not found in tempArr,
                unshift array with element to tempArr.*/
                tempArr.unshift([el]);
                
            } else {
                tempArr[newRow].push(el);
            }
        });
    });
    return tempArr;
}

function snail(arr) {
    let unpackedMatrix = [],
        n = arr[0].length - 1;
    for( i = 0; i <= n; i++) {
        arr[0].forEach(inner => {
            unpackedMatrix.push(inner);
        });
        arr.splice(0, 1);
        arr = rotate(arr);
    }
    return unpackedMatrix;
}

console.log(snail(matrix)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
//console.log(rotate(matrix));

// task 6
let monday = [
    {
        'name'  : 'Write a tutorial',
        'duration' : 180
    },
    {
        'name'  : 'Some web development',
        'duration' : 120
    }
];
let tuesday = [
    {
        'name'  : 'Keep writing that tutorial',
        'duration' : 240
    },
    {
        'name'  : 'Some more web development',
        'duration' : 180
    },
    {
        'name'  : 'A whole lot of nothing',
        'duration'  : 240
    }
];

// TASK 6 SOLUTION
let tasks = [monday, tuesday];
let amount = 0,
    taxRate = 15;

// step-1 concat two arrays, is it ok to code in this style?
tasks.reduce((current, next) =>  current.concat(next))
// step 2, converting mins to hours
.map(el => {
    el.duration = el.duration / 60;
    return el;
})
// step 3, show tasks with duration > 2
.filter(el => el.duration > 2)
// step 4-5, multiplying duration on hour rate,
// accumulating total amount
.map(el => {
    el.duration = el.duration * taxRate;
    amount += el.duration;
    return el;
});
// formating total amount
amount = '$' + amount;             
//console.log(amount); // => $210
