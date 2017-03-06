// Task 1
const ImmutableArray = {
	push: (arr, el) => arr.slice().concat(el),
	pop: function(arr){
		const tempArr = arr.slice();
		tempArr.pop();
		return tempArr;
	},
	shift: function(arr){
		const tempArr = arr.slice();
		tempArr.shift();
		return tempArr;
	},
	unshift: function(arr, el){
		const tempArr = arr.slice();
		tempArr.unshift(el);
		return tempArr;
	},
	remove: function(arr, index){
		const tempArr = arr.slice();
		tempArr.splice(index, 1);
		return tempArr;
	},
	insert: function(arr, el, index){
		const tempArr = arr.slice();
		tempArr.splice(index, 0, el);
		return tempArr;
	},
	swapWithPrevious: function(arr, index){
		let tempArr = arr.slice();
		const tempValue = tempArr.splice(index, 1);
		tempArr.splice(index-1, 0, tempValue[0]);
		return tempArr;
	},
	swapWithNext: function(arr, index){
		let tempArr = arr.slice();
		const tempValue = tempArr.splice(index, 1);
		tempArr.splice(index+1, 0, tempValue[0]);
		return tempArr;
	}
}

// console.log(ImmutableArray.swapWithNext([1,2,3,'a','b','c'], 3));


// Task 2
function intersection(arr1, arr2) {
	let tempArr = [];

	arr1.forEach(function(key) {
		if (arr2.includes(key)) {
			tempArr.push(key);
		}
	})

	//self invoked function which leaves only unique values
	tempArr = (function(arr){
		let array = arr.sort();

		for (var i = 0; i < array.length; i++){
			if (array[i] == array[i+1])
				array.splice(i+1, 1);
			else
				i++;
		}
		return array;
	}(tempArr));

	return tempArr;
}

// console.log(intersection([2, 1, 3, 1], [1, 3, 5]));


// Task 3
function vowelCount(str){
	var count = 0;
	str.split('').forEach(key => {
		if (/[aeiou]/i.test(key))
			count = count + 1;
	});
	return count;

}

// console.log(vowelCount('Hello World'));


// Task 4
function toEvenOddString(arr){
	let arr1 = [],
		arr2 = [];

	arr.forEach(key => {if (key%2 === 0) arr2.push(key); else arr1.push(key)});
	arr1.sort((a,b) => b-a);
	arr2.sort((a,b) => a-b);
	return arr2.concat(arr1).join('');
}

// console.log(toEvenOddString([1,3,2,8,13,7,4])); //returns '24813731' - where 13 is a single number (not 1 and 3)