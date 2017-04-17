#### Strings

1. Написать функцию, к-я принимает первый аргумент - строку, второй вргумент - кол-во повторений.
Возвращает строку в к-й содержится исходная строка заданное кол-во раз.

```javascript
function copyString1(string, n) {
  return new Array(n + 1).join(string);
}

function copyString2(string, n) {
  let newString = '';
  
  for (let i = 0; i < n; i++) {
    newString += string;
  }
  return newString;
}
```

2. Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:
`ucFirst("вася") == "Вася";
ucFirst("") == ""; // нет ошибок при пустой строке`

```javascript
function ucFirst(string) {
  return string.length ? string[0].toUpperCase() + string.slice(1) : '';
}
```

3. Создайте функцию `truncate(str, maxlength)`, которая проверяет длину строки str, 
и если она превосходит `maxlength` – заменяет конец str на "...", так чтобы ее длина стала 
равна `maxlength`.

```javascript
function truncate(str, maxlength, replaceText) {
  if (str.length > maxlength) {
    return str.slice(0, (maxlength - replaceText.length)) + replaceText;
  }
}
```

4. Написать функцию turnMeBaby, к-я принимает один аргумент - исходную строку 
и возвращает строку перевернутую задом на перед.

```javascript
function turnMeBaby(str) {
	return str.split('').reverse().join('');
}
```

5. Реализовать функцию, которая принимает на вход строку и возвращает 
число слов в этой строке. Слова разделены пробелами (и, возможно, не одним), 
а знаки пунктуации не учитываются. Допускается только посимвольный перебор строки.
// TODO: rethink this task and add solution

#### Numbers

1. Написать функцию, к-я принимает первый аргумент - число, второй вргумент - степень.
Возвращает число возведенное в заданную степень.

```javascript
function numberToRank(value, rank) {
  let sum = 1;
  
  for (let i = 0; i < rank; i++) {
    sum *= value;
  }
  
  return sum;
}
```

2. Написать функцию, к-я выводит в консоль/html-документ таблицу умножения.

    1 * 1 = 1;  
    1 * 2 = 2;  
    1 * 3 = 3;  
    ...
    
    ==========
    
    2 * 1 = 2;  
    2 * 2 = 4;  
    2 * 3 = 6;  
    ...
    
    ==========
    
    3 * 1 = 3;  
    3 * 2 = 6;  
    3 * 3 = 9;  
    ...
    
    ==========  
    ...  

```javascript
function multiplicationTable(num) {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= 10; j++) {
      const expression = i + ' * ' + j + ' = ' + i * j;
      console.log(expression);
    }
  }
}
```

3. Модифицировать функцию вывода таблицы умножения таким образом, чтобы она принимала на вход
два параметра: 1-й число, второй - кол-во строк таблицы умножения.

    multiTable(2, 3);  
    
    2 * 1 = 2;  
    2 * 2 = 4;  
    2 * 3 = 6;  

```javascript
function multiplicationTable2(num, lines) {
  for (let i = 1; i <= lines; i++) {
    const expression = num + ' * ' + i + ' = ' + num * i;
    console.log(expression);
  }
}
```

4. Напишите функцию doubleNum, которая возвращает переданное ей число увеличенное вдвое, 
если число не состоит из "двойников" - в таком случае функция просто возвращает исходное число. 
"Двойники" - числа состоящие из двух одинаковых чисел, например 77, 22, 200200, 4343.


    doubleNum(2); // 4  
    doubleNum(6); // 12  
    doubleNum(66); // 66  
    doubleNum(100100); // 100100  
    doubleNum(111111); // 111111 

```javascript
function doubleNum(num) {
  const str = num.toString();
  const half = str.slice(str.length / 2);
  
  return half + half === str ? num : num * 2;
}
```

```javascript
// Решение без приведения числа к строке
// Источник: http://jsraccoon.ru/exercise-double
function doubleNum(n){
  var div = Math.pow(10, Math.floor((1 + Math.log10(n)) / 2));
  return ((2 - (Math.floor(n / div) == (n % div))) * n  );
}
```

```javascript
// Решение с регулярными выражениями
// Источник: http://jsraccoon.ru/exercise-double
function doubleNum(num) {
  return /^([0-9]+)\1$/.test(num.toString()) ? num : num * 2;
}
```

5. dragonCurve

```javascript
function dragonCurve1(n) {
    if (n <= 0) return '0';
    if (n === 1) return '1';

    const next = dragonCurve(n - 1);
    const nextReversed = next.split('').reverse();
    const reverse = nextReversed.map(i => i ^ 1).join('');

    return next + '1' + reverse;
}
```

```javascript
function dragonCurve2(n) {
    let result = '';

    if (n <= 0) return '0';
    if (n === 1) return '1';

    while (n) {
        result += '1' + result.split('').reverse().map(i => i ^ 1).join('');
        n--;
    }

    return result
}
```
