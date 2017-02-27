// Strings

// 1
function multiStrings (str, count) {
	let string = '';
	for (var i = 0; i < count; i++) {
		string +=str;
	}
	console.log('task1: ' + string);
	return string;
}

multiStrings('sasS', 10);

// 2
function ucFirst(str) {
	let string = str[0].toUpperCase() + str.slice(1);
	console.log('task2: ' + string);
	return string;
}

ucFirst("вася");

//3
function truncate(str, maxlength) {
	if (str.length > maxlength)
		return (str.slice(0, maxlength) + '...');
	else
		return str;
}

let task3 = truncate('abcdefghijklmnopQrstuVwxyz', 3);
console.log('task3: ' + task3);
