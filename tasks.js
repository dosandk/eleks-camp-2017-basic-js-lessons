// Strings
// 1.
function repeat(string, times) {
	var result = '';

	for (var i = 0; i < times; i++) {
		result += string;
	}

	return result;
};
console.log('Strings Task1:');
console.log('ok -> ' + repeat('ok', 3));


// 2.
function ucFirst(str) {
	if (str.length > 0) {
		return str[0].toUpperCase() + str.slice(1).toLowerCase();
	}
};
console.log('Strings Task2:');
console.log('roman -> ' + ucFirst('roman'));


// 3.
function truncate(str, maxlength) {
	if (str.length > maxlength) {
		return str.slice(0, maxlength - 3) + '...';
	}

	return str;
}
console.log('Strings Task3:');
console.log('ivaskevych -> ' + truncate('ivaskevych', 6));

// 4.
function turnMeBaby(str) {
	return str.split('').reverse().join('');
}
console.log('Strings Task4:');
console.log('Roman -> ' + turnMeBaby('Roman'));

// 5.
function wordsCounter(str) {
	var split = str.split('');

	for(var i = 0; i < split.length; i++) {
		if(split[i] == ' ' && split[i+1] == ' '){
			split[i] = '';
		}
	}

	return split.join('').split(' ').length;
}
console.log('Strings Task4:');
console.log('This, is  the test!   sentence. -> ' + wordsCounter('This, is  the test!   sentence.'));


// Numbers
// 1.
function pow(number, exponent) {
	var result = number;

	for (var i = 1; i < exponent; i++) {
		result *= number; 
	}

	return result;
}
console.log('Numbers Task1:');
console.log('5**3 -> ' + pow(5, 3));

// 2.
function mulTable() {
	for (var i = 1; i < 10; i++) {
		console.log('==========');
		for (var j = 1; j < 10; j++) {
			console.log( i + ' * ' + j + ' = ' + i * j);
		} 
	}
}
console.log('Numbers Task2:');
mulTable();

// 3.
function multiTable(number, rows) {
	for (var j = 1; j < rows + 1; j++) {
		console.log( number + ' * ' + j + ' = ' + number * j);
	}
}
console.log('Numbers Task3:');
multiTable(7,5);

// 4.
function doubleNum(number) {
	if (number.toString().length%2 === 0) {
		var splited = (number+'').split('');
		var first = +splited.slice(0, splited.length/2).join('');
		var second = +splited.slice(splited.length/2).join('');

		if (first == second) {
			return number;
		}
	}
	return number * 2;
}
console.log('Numbers Task4:');
console.log(doubleNum(5));
console.log(doubleNum(77));
console.log(doubleNum(373373));

function dragonCurve(iteration) {
    var right = '1';
    var result = '';
    
    function retrograde(arr){
		return arr.split('').reverse().map(el=>+!(parseInt(el))).join('');
	}
	
    for(var i = 0; i < iteration; i++) {
    	result = result + right + retrograde(result); 
    }

    console.log(result);
}

dragonCurve(4);