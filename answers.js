//---------------- STRINGS ------------
console.log('%c STRINGS', 'color: red;');
//1.
console.log('1. =================');

function stringMultiply(str, num) {
    var result = '';
    for (var i = 0; i < num; i++) {
        result += (i === 0) ? str : ' ' + str;
    }
    return result;
};

console.log(stringMultiply('string', 6));
console.log(stringMultiply('Hello', 10));

//2
console.log('2. =================');

function ucFirst(str) {
    var a = str.substring(1, str.length);
    var b = str.toUpperCase().substring(0, 1);
    return b + a;
}

console.log(ucFirst('slavik'));
console.log(ucFirst(''));

//3
console.log('3. =================');

function turncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.substr(0,(maxLength-1)) + '...';
    }
}

console.log(turncate('Natalya b', 6));

//4
console.log('4. =================');

function turnMeBaby(str) {
    return str.split('').reverse().join('');            // b.toString()
}

console.log(turnMeBaby('Natalya'));

//5
console.log('5. =================');
const sentance = `Реализовать функцию, которая принимает на вход строку и возвращает 
число слов в этой строке. Слова разделены пробелами (и, возможно, не одним), 
а знаки пунктуации не учитываются. Допускается только посимвольный перебор строки.`,
      delimiters = [' ', '.', ',', '-', ';', ':', '!', '(', ')'];

function sortFunction (str, arr) {
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        let letter = arr.indexOf(str[i]) === -1,
            nextSign = arr.indexOf(str[i + 1]) !== -1;

        if (letter && nextSign || letter && typeof str[i + 1] === 'undefined') { 
            count++;
        }
    }
    console.log(count);
}

sortFunction(sentance, delimiters);




//------------- NUMBERS -----------
console.log('%c NUMBERS', 'color: red;');

//1
console.log('1. =================');

function involution(num, deg) {
    return Math.pow(num, deg);
}

console.log(involution(6,2));
console.log(involution(9,3));

//2
console.log('2. =================');

multiplication = () => {
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i*j}`);
        }
        console.log('***************');
    }
}

multiplication();
 
//3
console.log('3. =================');

multiplication = (num, str) => {
    for (var i = 1; i <= str; i++) {
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

multiplication(4,3);

//4
console.log('4. =================');

doubleNum = (num) => {
    var newnum = num.toString();
    var length = newnum.length;

    if (length % 2 !== 0) {
        return num*2;
    }
    var a = newnum.slice(0, length/2);
    var b = newnum.slice(-length/2);
    return (a !== b) ? num*2 : num;
}

console.log(doubleNum(2020));
console.log(doubleNum(2568));

