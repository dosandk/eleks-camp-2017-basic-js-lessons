// STRINGS

// 1
function repeatStr(string, n) {
    var newString = '';
    for (var i = 0; i < n; i++) {
        newString += string;
    }
    return newString;
}

// 2
function ucFirst(string) {
    var char = string.split('');
    char[0] = char[0].toUpperCase();
    return char.join('');
}

// 3
function truncate(str, maxlength) {
	if (str.length > maxlength)
		return (str.slice(0, maxlength) + '...');
	else
		return str;
}

// 4
function turnMeBaby(string) {
    var newString = '';
    for (var i = 0; i < string.length; i++) {
        newString += string[string.length - i - 1];
    }
    return newString;
}

// 5

// NUMBERS

// 1
function pow(x, n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}