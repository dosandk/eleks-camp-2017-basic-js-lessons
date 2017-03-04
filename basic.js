// STRINGS

// 1
function repeatString(str, n) {
    var newString = '';
    for (var i = 0; i < n; i++) {
        newString += str;
    }
    return newString;
}

// 2
function ucFirst(str) {
    var char = str.split('');
    char[0] = char[0].toUpperCase();
    return char.join('');
}

// 3
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return (str.slice(0, maxlength) + '...');
    }
    else {
        return str;
    }	
}

// 4
function turnMeBaby(str) {
    var newString = '';
    for (var i = 0; i < str.length; i++) {
        newString += str[str.length - i - 1];
    }
    return newString;
}

// 5
function wordCount(str) {
    return str.split(/\s+/).length;
}

// NUMBERS

// 1
function pow(x, n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

// 2
function multiplycationTable() {
    for(var i = 1; i <= 10; i += 1) {
        for(var j = 1; j <= 10; j += 1) {
            console.log(i + ' * ' + j + ' = ' + i * j);
        }
        console.log('============');
    }
}

// 3
function multiplycate(num, count) {
    for(var i = 1; i <= count; i++) {
        console.log(num + ' * ' + i + ' = ' + num * i);
    }
}

// 4
function doubleNum(num) {
    var str = num.toString();
    var s = str.slice(str.length / 2);
    return s + s == str ? num : num * 2;
}