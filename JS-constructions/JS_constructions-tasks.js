// 1.
let ImmutableArray = {
	push: 
		function (array, ...newElements) {
			return [...array, ...newElements];
		},
	pop:
		function (array) {
			return array.slice(0, -1);
		},
	shift:
		function (array) {
			return array.slice(1);
		},
	unshift:
		function (array, ...newElements) {
			return [...newElements, ...array];
		},
	remove:
		function (array, index) {
			return [...array.slice(0, index), ...array.slice(index + 1)];
		},
	insert:
		function (array, index, el) {
			return [...array.slice(0, index), el, ...array.slice(index + 1)];
		},
	swapWithPrevious:
		function (array, index) {
			if(index < 0 || index >= array.length) {
				throw new Error('Out of array borders.');
			}

			let temp = [...array],
				len = temp.length,
				swap = temp[index],
				prev = temp[index - 1];
			//swap with last element of array if
			if(index == 0){
				prev = temp[len - 1];
				swap = temp[0];
				temp[index] = prev;
				temp[len - 1] = swap;

				return temp;
			}
				temp[index] = prev;
				temp[index - 1] = swap;

				return temp;
		},
	swapWithNext:
		function (array, index) {
			if(index < 0 || index >= array.length) {
				throw new Error('Out of array borders.');
			}

			let temp = [...array],
				len = temp.length,
				swap = temp[index],
				next = temp[index + 1];
			//swap with first element of array if
			if (index == len - 1) {
				next = temp[0];
				swap = temp[len - 1];
				temp[index] = next;
				temp[0] = swap;

				return temp;
			}
				temp[index] = next;
				temp[index + 1] = swap;

				return temp;
		}
};

// 2.
function intersection(firstArray, secondArray) {
	return firstArray.filter((el) => secondArray.indexOf(el) > -1)
					 .sort((a, b) => a - b)
					 .filter((el, index, array) => !index || el != array[index - 1]);
}

// 3.
function vowelCount(string) {
	let temp = str.match(/[aouei]/gi);

	return temp === null ? 0 : temp.length;
}

// 4.
function toEvenOddString(array) {
	return [...array.filter( (el) => el % 2 == 0 )
   					.sort( (a, b) => a - b ),
   			...array.filter( (el) => el % 2 !== 0 )
   					.sort( (a, b) => b - a )];
}

// 5.
function snail(array) {
	function rotateArray(array) {
		var rotatedArray = [];
		for(var i = 0; i < array[0].length; i++) {
			rotatedArray[i] = [];
		    for(var j = 0; j < array.length; j++) {
		       rotatedArray[i][j] = array[j][array[0].length-i-1];
		    }
		}
		return rotatedArray;
	}

	var resultArray = [];

	while (array.length) {
		[].push.apply(resultArray, array.shift());

		if (!array.length) {
			continue;
		}

		array = rotateArray(array);
	}
	
	return resultArray;
}

// 6.
let monday = [
        {
            'name'  : 'Write a tutorial',
            'duration' : 180
        },
        {
            'name'  : 'Some web development',
            'duration' : 120
        }
    ];
 
let tuesday = [
        {
            'name'  : 'Keep writing that tutorial',
            'duration' : 240
        },
        {
            'name'  : 'Some more web development',
            'duration' : 180
        },
        {
            'name'  : 'A whole lot of nothing',
            'duration'  : 240
        }
    ];

let tasks = [monday, tuesday];

// 6.6
let amount = '$' +  

// 6.1
tasks.reduce((prev,next) => prev.concat(next)) // tasks.reduce((prev,next)=>[...prev, ...next])

// 6.2
.map(el => {el.duration = el.duration/60; return el;})

// 6.3
.filter(el => el.duration > 2)

// 6.4
.map(el => {el.duration = el.duration * 15; return el;})

// 6.5
.reduce((prev, next) => prev + next.duration, 0)
