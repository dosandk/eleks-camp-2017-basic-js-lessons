//1.Створити об’єкт ImmutableArray який міститиме функції для роботи з масивами, 
// що не мутують переданий на вхід масив (повертають новий змінений):
// push(arr, el)
// pop(arr)
// shift(arr)
// unshift(arr, el)
// remove(arr, index) // видалення елемента з масива по індексу
// insert(arr, el, index)
// swapWithPrevious(arr, index) // міняє місцями елемент з індексом index з елементом index - 1
// swapWithNext(arr, index) // міняє місцями елемент з індексом index з елементом index + 1



let arr = [1,2,3];

let ImmutableArray = {

    push(arr, ...rest) {
        if(Array.isArray(arr)) {
            return arr.concat(rest);
        }
    },

    pop(arr) {
        if(Array.isArray(arr) && arr.length !== 0) {
            return arr.slice(0, arr.length - 1);
        }
    },

    shift(arr) {
        if(Array.isArray(arr) && arr.length !== 0) {
            return arr.slice(1);
        }
    },

    unshift(arr, ...rest) {
        if(Array.isArray(arr) && arr.length !== 0) {
            return [...rest].concat(arr);
        }
    },

    remove(arr, index) {
        if(Array.isArray(arr) && arr.length !== 0) {
            let newArr = arr.slice();
            newArr.splice(index,1);
            return newArr;
        }
    },

    insert(arr, el, index) {
        if(Array.isArray(arr) && arr.length !== 0) {
            let newArr = arr.slice();
            newArr.splice(index,0,el);
            return newArr;
        }
    },

    swapWithPrevious(arr, index) {
        if(Array.isArray(arr) && arr.length !== 0) {
            let newArr = arr.slice();
            
            if(index >= 1 && index <= arr.length - 1) {
                newArr.splice(index - 1, 2, arr[index], arr[index - 1]);
                return newArr;
            }
            return arr;
        }
    },

    swapWithNext(arr, index) {
        if(Array.isArray(arr) && arr.length !== 0) {
            var newArr = arr.slice();
            
            if(index >= 0 && index < arr.length - 1) {
                newArr.splice(index, 2, arr[index+1], arr[index]);
                return newArr;
            }
            return arr;
        }
    }
};



ImmutableArray.push([1,2,3], [4], {a: 1}); //[1,2,3,[4],{a:1}]

ImmutableArray.pop(arr); //[1,2]

ImmutableArray.shift(arr); //[2,3]

ImmutableArray.unshift(arr, 0, [1], {a:2}); //[0, [1], {a:2}, 1, 2, 3]

ImmutableArray.remove(arr, 2); //[1,2]

ImmutableArray.insert([1,2,3], 4, 3); //[1,2,3,4]

ImmutableArray.swapWithPrevious(arr, 2);    //[1, 3, 2]

ImmutableArray.swapWithNext([1,2,3], 1); //[1, 3, 2]



//2. Написати функцію intersection(arr1, arr2) котра буде повертати перетин масивів arr1 та arr2, 
// що складається з взятих по одному відсортованих значень, 
// наприклад intersection([2, 1, 3, 1], [1, 3, 5]) => [1, 3]


function intersection (arr1, arr2) {
    let newArr = [];
    for(let i = 0; i < arr1.length; i+=1) {
        for(let j = 0; j < arr2.length; j += 1) {
            if(arr1[i] === arr2[j] && newArr.indexOf(arr1[i]) === -1) {
                newArr.push(arr1[i]);
            }
        }
    }
    return newArr;
}

intersection([2, 1, 3, 1], [1, 3, 5, 5]);   //[1, 3]



function intersection(arr1, arr2) {
    let newArr = [];
    let arrFixed = 
    arr1.filter((item, i, arr) => {
		return i === arr.indexOf(item);
	})
	.forEach((item,i,arr) => {
		if(arr2.includes(item)) {newArr.push(item)};
	});
	return newArr;
}

intersection([2, 1, 3, 1], [1, 3, 5, 5]);   //[1, 3]



//3. Написати функцію котра буде видавати кількість голосних літер латинського алфавіту 
// в переданій стрічці vowelCount(`Hello WORLD!`) = 3. Основна умова - використати RegExp.

function vowelCount(str) {
	return `Vovels in string "${str}" - ` + str.match(/[aeiou]/gi).length;
}

vowelCount(`Hello WORLD!`);



//4. Маючи масив, що складається з додатніх чисел, створити стрічку, елементами якої
// будуть йти спочатку парні числа в зростаючому порядку, а за ними непарні числа 
// в спадаючому порядку без пробілів. 
// Наприклад: toEvenOddString([1, 3, 2, 8, 13, 7, 4]) => `24813731` (тому що [2, 4, 8, 13, 7, 3, 1])

function toEvenOddString(arr) {
    let oddValArr = arr.filter((item) => {
        return item % 2;
    }).sort(sortReverse);
    
    let evenValArr = arr.filter((item) => {
        return !(item % 2);
    }).sort(sortNormal);

	return evenValArr.concat(oddValArr).join("");
}

function sortNormal(a, b) {
    return a - b;
}

function sortReverse(a, b) {
    return b - a;
}

toEvenOddString([1, 3, 2, 8, 13, 7, 4]);



//5. (Задача з зірочкою :)) Написати функцію snail(arr), де arr - 2-вимірний масив, 
// котра буде повертати одновимірний масив елементи якого взяті за 
// годинниковою стрілкою по спіралі з масива arr. Наприклад:
// 		arr = [
//              [ 1,  2,  3,  4, 5],
// 			    [12, 13, 14, 15, 6],
//              [11, 10,  9,  8, 7]
//         ];

// snail(arr) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


let myArray =  [

[ 1, 2, 3, 4, 5],

[12, 13, 14, 15, 6],

[11, 10, 9, 8, 7]

];


function rotateArr(arr) {
    let newArr = [];
  
    for(let i = 0; i < arr[0].length; i += 1) {
        newArr.push([]);
    }
  
    for(let k = 0; k < arr.length; k +=1 ) {
        for(let j = 0; j < arr[k].length; j += 1) {
            newArr[j].push(arr[k][j]);
        }
    }
    return newArr.reverse();
}

function snail(arr, acum) {
    arr = arr.slice();
    acum = acum || [];
    
	acum = acum.concat(arr.shift());

    if(arr.length === 1) {
        acum = acum.concat(arr.shift().reverse());
        return acum;
    }

    var newArr = rotateArr(arr);

    return snail(newArr, acum);
}

snail(myArray);



//6. Комплексна таска на функціональні методи масивів

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

let tasks = [monday, tuesday];

tasks = tasks.reduce((prev, cur) => {
    return [...prev, ...cur];
});

tasks.map((elem, index, arr) => {
    elem.duration = elem.duration / 60;
    return elem;
});

tasks = tasks.filter((elem) => {
	return elem.duration > 2;
});

tasks.map((elem) => {
	elem.salary = elem.duration * 15;
    return elem;
});

var amount = tasks.reduce((sum, elem) => { 
    sum += elem.salary; 
    return sum;
}, 0);

function formatAmount(val) {
    return "$" + val;
}

let amountFormated = formatAmount(amount);

console.log("Amount - " + amount);
console.log("Formated Amount - " + amountFormated);