// 1
let ImmutableArray = {
	push: (arr, el) => arr.slice().concat(el),
	pop: function(arr){
		let newArr = arr.slice();
		newArr.pop();
		return newArr;
	},
	shift: function(arr){
		let newArr = arr.slice();
		newArr.shift();
		return newArr;
	},
	unshift: function(arr, el){
		let newArr = arr.slice();
		newArr.unshift(el);
		return newArr;
	},
	remove: function(arr, index){
		let newArr = arr.slice();
		newArr.splice(index, 1);
		return newArr;
	},
	insert: function(arr, el, index){
		let newArr = arr.slice();
		newArr.splice(index, 0, el);
		return newArr;
	},
	swapWithPrevious: function(arr, index){
		let newArr = arr.slice();
		let newValue = newArr.splice(index, 1);
		newArr.splice(index-1, 0, newValue[0]);
		return newArr;
	},
	swapWithNext: function(arr, index){
		let newArr = arr.slice();
		let newValue = newArr.splice(index, 1);
		newArr.splice(index+1, 0, newValue[0]);
		return newArr;
	}
}

// 2
function intersection(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            result += arr1[i];
        }        
    }
    return result;
}

// 3
function vowelCount(str) {
    return str.match(/[aeiouy]/gi).length;
}
vowelCount(`Hello WORLD!`);

// 4
