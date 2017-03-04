/**********************Strings*************************/
//1.Написать функцию, к-я принимает первый аргумент - строку, второй вргумент - кол-во повторений.
//Возвращает строку в к-й содержится исходная строка заданное кол-во раз.


function returnStr(str, n){
  for (let i = 0; i < n; i++){
    console.log(str);
  }
}
returnStr('love', 5);

//2. Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, 
//например: ucFirst("вася") == "Вася";
//ucFirst("") == ""; // нет ошибок при пустой строке

function ucFirst(str){
 return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(ucFirst("вася"));

//3. Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, 
//и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала 
//равна maxlength.

function truncate(str, maxlength){
  if(str.length > maxlength){
    return str.substr(0, maxlength) + "...";
  }
  return str;
}

console.log(truncate('вася', 3));

//4.Написать функцию turnMeBaby, к-я принимает один аргумент - исходную строку 
//и возвращает строку перевернутую задом на перед.

function turnMeBaby(str){
  return str.split('').reverse().join('');
}
console.log(turnMeBaby("вася"));


//Реализовать функцию, которая принимает на вход строку и возвращает 
//число слов в этой строке. Слова разделены пробелами (и, возможно, не одним), 
//а знаки пунктуации не учитываются. Допускается только посимвольный перебор строки.

function countWord(str){
let strArr = str.split(' ');

strArr = strArr.filter(function(n) { 
  return n != '';
})

return strArr.length;
}
console.log(countWord("вася  вася  вася"));

/**********************Numbers*************************/

//1. Написать функцию, к-я принимает первый аргумент - число, второй вргумент - степень.
//Возвращает число возведенное в заданную степень.
function pow(number, n){
  let a = number;

  for(let i = 1; i<n; i++){
    a *= number;
  }
  return a;
}

console.log(pow(2, 4));

//2. Написать функцию, к-я выводит в консоль/html-документ таблицу умножения.

function multiTable(number1, number2){
  for(let i = 1; i <= 9; i++){

    for(let j = 1; j <= 9; j++){
        let result = i*j;
        console.log (i + " * "  + j + " = "  + result);
    }
  }
}
multiTable(2, 3);

//3. Модифицировать функцию вывода таблицы умножения таким образом, чтобы она принимала на вход
//два параметра: 1-й число, второй - кол-во строк таблицы умножения.


function table(number1, number2){
  for(let i = number1; i < number2; i++){

    for(let j = 1; j <= number2; j++){
        let result = i*j;
        console.log (i + " * "  + j + " = "  + result);
    }
  }
}
table(2, 3);

//4. Напишите функцию doubleNum, которая возвращает переданное ей число увеличенное вдвое, 
//числа состоящие из двух одинаковых чисел - в таком случае функция просто возвращает исходное число. 
//"Двойники" - числа состоящие из двух одинаковых чисел, например 77, 22, 200200, 4343.

function doubleNum(number){
  let strObj = number.toString();

  if(strObj.length % 2 === 0){
    let half = strObj.slice(strObj.length / 2);
    if(half + half === strObj){
      return strObj;
    }else{
    return number * 2;
    }
  }else{
    return number * 2;
  }
  
}

console.log(doubleNum(2323));
