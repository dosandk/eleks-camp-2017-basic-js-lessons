// Strings


// 1. Написать функцию, к-я принимает первый аргумент - строку, второй вргумент - кол-во повторений.
// Возвращает строку в к-й содержится исходная строка заданное кол-во раз.

            function repeatStr(str, counter) {
                var res= "";
                if(counter === 1) { return str}
                    return  str + repeatStr(str, counter - 1);
            }
            repeatStr("abc", 3)
            

            function repeatStr(str, num) {
                return new Array(num + 1).join(str);
            }
            repeatStr("abc", 3)


// 2. Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:
// ucFirst("вася") == "Вася";
// ucFirst("") == ""; // нет ошибок при пустой строке
            
            function ucFirst(str) {
                if(!str) return str;
                return str[0].toUpperCase() + str.slice(1);
            }
            ucFirst("вася");


// 3. Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, 
// и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала 
// равна maxlength.
            
        function truncate(str, maxLength, endSign) {
			if(str.length < maxLength) return str;
            return str.slice(0, maxLength - endSign.length) + endSign;
        }
        truncate("Afrojack vs. THIRTY SECONDS TO MARS - Do Or Die", 35, "$$$");


// 4. Написать функцию turnMeBaby, к-я принимает один аргумент - исходную строку 
// и возвращает строку перевернутую задом на перед.

        function turnMeBaby(str) {
            var i = str.length - 1;
            var newStr = "";
            for(; i >= 0; i -= 1) {
                newStr += str[i];
            }
            return newStr;
        }
        turnMeBaby("шиворот навыворот");

        
        function turnMeBaby(str) {
            return str.split("").reverse().join("");
        }
        turnMeBaby("шиворот навыворот");


// 5. Реализовать функцию, которая принимает на вход строку и возвращает 
// число слов в этой строке. Слова разделены пробелами (и, возможно, не одним), 
// а знаки пунктуации не учитываются. Допускается только посимвольный перебор строки.


function removeMultiSpaces(str) {
    str = str.trim();
    str = str.replace(/  +/g, ' ');
    return str;
}


function removePunktuation (str) {
    str = str.replace(/[.,!?;:-]/g,"");
    return str;
}

function countWords(str) {

    str = removePunktuation (str);
    str = removeMultiSpaces(str);
    
    var counter = 0;
    
    var STR_LENGTH = str.length;
    
    if(STR_LENGTH) {
        counter = 1;
        for(var i = 0; i < STR_LENGTH; i+=1) {
            if(str.charCodeAt(i) === 32) {
                counter +=1;
            }
        }
    }
			
    return counter;
}

countWords(" Дело в  том, ,...,   что символы,!!. ,- ;;; , сравниваются    c..., ?!,    ");



//1. Написать функцию, к-я принимает первый аргумент - число, второй вргумент - степень.
// Возвращает число возведенное в заданную степень.

        function pow(n, m) {
            if(m === 1) {return n}
            return n * pow(n, m - 1);
        }
        pow(2,3);


        function pow(n,m) {
            var sum = 1;
            if(m === 1) { return n;}
            else if(m) {
                    for(; m >= 1; m -= 1 ) {
                        sum *= n;
                }
            }  
            return sum; 
        }
        pow(2,3);  

//2. Написать функцию, к-я выводит в консоль/html-документ таблицу умножения.

        function multiplyTable() {
            for(var i = 1; i < 10; i += 1) {
                for(var j = 1; j < 10; j += 1) {
                    console.log(i + " * " + j + " = " + i * j);
                }
                console.log("=========")
            }
        }
        multiplyTable();


//3. Модифицировать функцию вывода таблицы умножения таким образом, чтобы она принимала на вход
// два параметра: 1-й число, второй - кол-во строк таблицы умножения.

// multiTable(2, 3);  

// 2 * 1 = 2;
// 2 * 2 = 4;
// 2 * 3 = 6;  

        function multiplyTable(a, b) {
            for(var i = 1; i < a; i += 1) {
                for(var j = 1; j <= b; j += 1) {
                    console.log(i + " * " + j + " = " + i * j);
                }
                console.log("=========")
            }
        }
        multiplyTable(2, 3);


//4. Напишите функцию doubleNum, которая возвращает переданное ей число увеличенное вдвое, 
// если число не состоит из "двойников" - в таком случае функция просто возвращает исходное число. 
// "Двойники" - числа состоящие из двух одинаковых чисел, например 77, 22, 200200, 4343.

// doubleNum(2); // 4
// doubleNum(6); // 12
// doubleNum(66); // 66
// doubleNum(100100); // 100100
// doubleNum(111111); // 100100

        
        function multiply(a, b) {
            return a * b;
        }

        var  multiplyByTwo = multiply.bind(null, 2);
        
        function doubleNum(num) {
            var str = "" + num;
            var leftPart = str.slice(0, str.length/2);
            var rightPart = str.slice(str.length/2, str.length);
            
            if(str.length % 2 === 0 && (leftPart === rightPart)) {
                return str;
            }
            else {
                return multiplyByTwo(+str);
            }
        }


        doubleNum(2); // 4
        doubleNum(6); // 12
        doubleNum(66); // 66
        doubleNum(100100); // 100100
        doubleNum(111111); // 111111