//Task 1 ================================================

var ImmutableArray = {
  
  push: function (arr, newElem){
    return [...arr, newElem]
  },
  pop: function (arr){
    return arr.slice(0, -1)
  },
  shift: function (arr){
    return arr.slice(1)
  },
  unshift: function (arr, newElem){
    return [newElem, ...arr]
  },
  remove: function (arr, index){
    return arr.slice(0, index).concat(arr.slice(index+1))
  },
  insert: function (arr,newElem, index){
    return arr.slice(0, index).concat(newElem).concat(arr.slice(index))
  },
  swapWithPrevious: function (arr, index){
    return arr.slice(0, index-1).concat(arr[index]).concat(arr[index-1]).concat(arr.slice(index+1))
  },
  swapWithNext: function (arr, index){
    return arr.slice(0, index).concat(arr[index+1]).concat(arr[index]).concat(arr.slice(index+2))
  }
}

//Task 2 ===============================================================================

function intersection (arr1,arr2) {
  let res = [];
  for (let i=0; i<arr1.length; i++){
    for (let j=0; j<arr2.length; j++){
      if(arr1[i] == arr2[j]){
        res.push(arr1[i]);
      }
    }
  }
  return res;
}

console.log(intersection([1,2,3,4],[1,3,8]))


//Task 3 ==============================================================================

function vowelCount(str) {
  var counter = 0,
      regExp = /[aeiou]/i;
  for (var i=0; i<str.length; i++){
    if (regExp.test(str[i]) ){
      counter++;
    }
  } 
  return counter;
}

console.log(vowelCount(`Hello WORLD!`))


//Task 4 ===============================================================================

function toEvenOddString(arr) {
  let str = '',
      arr1 = [],
      arr2 = [];
  for (let i=0; i<arr.length; i++){
    if (arr[i] % 2 == 0){
      arr1.push(arr[i])
    } else {
      arr2.push(arr[i])
    }
  }
  arr1.sort(function(a,b){return a - b;});
  arr2.sort(function(a,b){return b - a;});
  str = arr1.concat(arr2).join('');
  
  return str;
}

console.log(toEvenOddString([1, 3, 2, 8, 13, 7, 4]));


//Task 5 ====================================================================================


function snail (arr) {
     let top = 0,
         down = matrix.length - 1,
         left = 0,
         right = matrix[0].length - 1,
         newArr = [];
 
    while (true){
         for(let j = left; j <= right; j++) newArr.push(matrix[top][j]);
         top++;
         if(top > down || left > right) break;
          for(let i = top; i <= down; i++) newArr.push(matrix[i][right]);
          right--;
          if(top > down || left > right) break;
          //Print the bottom row
          for(let j = right; j >= left; --j) newArr.push(matrix[down][j]);
          down--;
          if(top > down || left > right) break;
          //Print the leftmost column
          for(let i = down; i >= top; --i) newArr.push(matrix[i][left]);
          left++;
          if(top > down || left > right) break;
      }
    return newArr; 
 }
  
matrix = [

[ 1, 2, 3, 4, 5],

[12, 13, 14, 15, 6],

[11, 10, 9, 8, 7]

];

console.log(snail(matrix));

//Task 6 =======================================================================

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
let totalTime = 0;

// 6.1 ============
let allTasks = tasks.reduce(function(previousValue, currentItem) {
 return previousValue.concat(currentItem);
});

// 6.2 ==============
allTasks.map (function (item){
 return item.duration = item.duration / 60;
});

// 6.3 =============
allTasks.filter(function(item){
  return item.duration > 2;
});

// 6.4 ==============
allTasks.map (function (item){
  return item.income = item.duration * 15 + '$';
});

// 6.5 ==============
allTasks.map (function (item){
  totalTime += item.duration;
});

// 6.6 ==============
totalTime = '$'+ totalTime;
console.log(allTasks);
console.log (totalTime);