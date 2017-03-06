//ЗАВДАННЯ 1
let arr = ['JS', 'CSS', 'HTML'];

let ImmutableArray = {

  push: function (arr, el){
    var arr1 = arr.slice();
    arr1.push(el);
    console.log(arr1);
  },

  pop: function(arr){
    var arr1 = arr.slice();
    arr1.pop();
    console.log(arr1);
  },

  shift: function(arr){
    var arr1= arr.slice();
    arr1.shift();
    console.log(arr1);
  },

  unshift: function(arr, el){
    var arr1= arr.slice();
    arr1.unshift(el);
    console.log(arr1);
  },

  remove: function (arr, index){
    var arr1= arr.slice();
    arr1.splice(index, 1);
    console.log(arr1);
  },

  insert: function (arr, el, index){
    var arr1= arr.slice();
    arr1.splice(index, 0, el);
    console.log(arr1);
  },
  
  swapWithPrevious: function (arr, index){
    if(index > 0 && index < arr.length){
      var arr1= arr.slice();
      arr1.splice(index-1, 0, arr1[index]);
      arr1.splice(index+1, 1);
      console.log(arr1);
    }else{
      console.log('such index don\'t exist')
    }
  },

  swapWithNext: function (arr, index){
    if(index > -1 && index < arr.length-1){
    var arr1= arr.slice();
    arr1.splice(index+2, 0, arr1[index]);
    arr1.splice(index, 1);
    console.log(arr1);
    }else{
      console.log('such index don\'t exist')
    }
  }

}


/*2. Написати функцію intersection(arr1, arr2) котра буде повертати перетин масивів arr1 та arr2,
що складається з взятих по одному відсортованих значень, наприклад 
intersection([2, 1, 3, 1], [1, 3, 5]) => [1, 3]*/

let arr1 = [2, 1, 3, 1];
let arr2 =  [1, 3, 5];

function intersection(arr1, arr2){
  let arr3 = [];
  for(let i = 0; i < arr1.length; i++){
          for(let j = 0; j < arr2.length; j++){
              if (arr1[i] == arr2[j])
                  arr3.push(arr1[i]); 
          }
  }       
 
  return arr3.filter(function(item, i) {      
    return arr3.indexOf(item) === i;
 })
 
}
console.log(intersection(arr1, arr2)) ;


/*3. Написати функцію котра буде видавати кількість голосних літер
латинського алфавіту в переданій стрічці vowelCount(`Hello WORLD!`) = 3
Основна умова - використати RegExp.*/

let str = "Hello World!";

  function vowelCount(exp){
    let reg = new RegExp(/[aeiouy]/ig);
    let vowels = exp.match(reg);
    if (vowels.length > 0){
      console.log(vowels.length);
    } else{
      console.log('no vowels')
    }

  }
vowelCount(str);



/* 4. Маючи масив, що складається з додатніх чисел, створити стрічку,
елементами якої будуть йти спочатку парні числа в зростаючому порядку,
а за ними непарні числа в спадаючому порядку без пробілів. Наприклад:
toEvenOddString([1, 3, 2, 8, 13, 7, 4]) =&gt; `24813731` (тому що [2, 4,
8, 13, 7, 3, 1])*/

let array = [1, 3, 2, 8, 13, 7, 4];
let result;

function toEvenOddString(arr){
    function compare(a, b) {
    return a - b;
  }

  function compareReversed(a, b) {
    return b - a;
  }
  
   let newArr1 = arr.filter(function(item){
    return item % 2 === 0;
   })

  let newArr2 = arr.filter(function(item){
    return item % 2 > 0
  })
  
  result = newArr1.sort(compare).concat(newArr2.sort(compareReversed));
  return result.join('');
}

console.log(toEvenOddString(array));



//Завдання 6
let monday = [

  {
    'name' : 'Write a tutorial',
    'duration' : 180
  },

  {
    'name'  : 'Some web development',
    'duration' : 120
  }
];

let tuesday = [
  {
  'name' : 'Keep writing that tutorial',
  'duration' : 240
  },

  {
  'name' : 'Some more web development',
  'duration' : 180
  },

  {
  'name' : 'A whole lot of nothing',
  'duration' : 240
  }
];

let tasks = [monday, tuesday];

//1) Скомбінувати двох-вимірний масив в одно-вимірний масив усіх тасок за два дні
let allTasks = tasks.reduce(function(join, current){
  return join.concat(current);
}, [])

//2) Перетворити попередній масив в масив, в якому тривалість тасок перетворена з хвилин в години
var tasksInHour = allTasks.map(function(item){
  item['duration'] = item['duration']/60;
  return item;
})
console.log(tasksInHour);


//3 Вибрати тільки ті таски, тривалість яких зайняла більше 2 годин
var bigger2 = tasksInHour.filter(function(item){
  if (item['duration'] > 2){
  return item;
  }
})
console.log(bigger2);

//4 Перемножити кожну тривалість тасок на оплачуваний рейт (15$для прикладу)
var perHour = bigger2.map(function(item){
  item['duration'] = item['duration']*15;
  return item;
})
console.log(perHour);

//5 Додати весь час
var sum = perHour.reduce(function(sum, current){
  return sum + current['duration'];
}, 0);
console.log(sum);

//6 Відформатувати отримане число у вигляді $<amount>;
var outPut = '$' + sum; 
console.log(outPut);




