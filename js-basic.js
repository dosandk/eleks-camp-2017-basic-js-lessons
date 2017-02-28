// STRINGS

// task-1 
function multipleStings(str, n) {
    var strCopy = str;
    for(i = 1; i < n; i++){
        str += strCopy;
    }
    return str;
}
//console.log(multipleStings('f1', 4));   

//task-2
function ucFirst(str) {
    if(typeof(str) == 'string' && typeof(str) !== 'undefined') {
        var a = str.split('');
        letters[0] = letters[0].toUpperCase();
        return letters.join('');
    } else {
        return str;
    }
}
//console.log(ucFirst('lviv'));         


//task-3
function truncate(str, maxlength) {
    if (str.length < maxlength) {
        return str;
    } else {
        var splitedStr = str.split('');
        for( i = 0; i < splitedStr.length; i++) {
            if( i == maxlength) {
                splitedStr[i] = '...';
            } else if(i > maxlength) {
                splitedStr[i] = '';
            }
        }
        return splitedStr.join('');
    }
}
//console.log(truncate('Lorem ipsulum', 5)); 

// task-4
function turnMeBabe(str) {
    return str.split('').reverse().join('');
}
//console.log(turnMeBabe('cofounder')); 


// task-5
function countWords(str) {
    var wordCounter = 0;
    for(i = 0; i <=  str.length - 1; i++) {
        if(str[i] == ' ' && /[a-z]/.test(str[i+1])) {
            wordCounter += 1;
        }
    }
    if(/[A-z]/.test(str[0])) {
        wordCounter += 1;
    }
    if( str[str.length - 1] == ' '){ 
        wordCounter -= 1;
    }
    return wordCounter;
}
//console.log(countWords('Angel waterfall highest waterfall in the world.')); 

//NUMBERS
//task-1
function toPow(n, m) {
    if(m != 1) {
        return n * toPow(n, m - 1);
    } else {
        return n;
    }
}
//console.log(toPow(2, 8)); // task-1 numbers

//task-2 
function multiplicationTable() {
    for(i = 1; i <= 9; i++) {
        console.log("--- " + i + "---");
        for(j = 1; j<= 9; j++) {
            console.log(i + ' * ' + j + ' = ' + i * j);
        }
    }
}
//MultiplicationTable(); 

//task-3 
function exactMultiplicationTable(n, m) {
        console.log("--- " + n + "---");
        for(j = 1; j<= m; j++){
            console.log(n + ' * ' + j + ' = ' + n * j);
        }
}
//exactMultiplicationTable(); 

//task-4
function doubleNum(number) {
   numArray = number.toString().split('');

   if( numArray.length % 2 == 0 ) {
       var numPartOne = numArray.slice(0, numArray.length/2).join('');
       var numPartTwo = numArray.slice(numArray.length/2, numArray.length).join('');

       if(numPartOne == numPartTwo) {
           return number;
       } else {
           return number * 2;
       }
   } else {
       return number * 2;
   }
}
//console.log(doubleNum(66));