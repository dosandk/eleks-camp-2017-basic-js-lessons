'use strict';

(function() {

// 1  
    let input = [1, 2, 3, 4, 5, 6, 7];
    let immutableArray = {
        clone: (arr) => {
            return arr.slice();
        },
        push: function (arr, el) {
            var a = this.clone(arr);
            a.push(el);
            return a;
        },
        pop: function (arr) {
            var a = this.clone(arr);
            a.pop();
            return a;
        },
        shift: function(arr) {
            var a = this.clone(arr);
            a.shift();
            return a;
        },
        unshift: function(arr, el) {
            var a = this.clone(arr);
            a.unshift(el);
            return a;
        },
        remove: function(arr, index) {
            var a = this.clone(arr);
            a.splice(index, 1);
            return a;
        },
        insert: function(arr, el, index) {
            var a = this.clone(arr);
            a.splice(index, 0, el);
            return a;
        },
        swapWithPrevious: function(arr, index) {
            var a = this.clone(arr);
            var b = a.splice(index - 1, 2).reverse();
            a.splice(index - 1, 0, ...b);
            return a;

        },
        swapWithNext: function(arr, index) {
            var a = this.clone(arr);
            var b = a.splice(index, 2).reverse();
            a.splice(index, 0, ...b);
            return a;
        }
    }

    console.log('input: ', input);
    console.log('push: ', immutableArray.push(input, 9));
    console.log('pop: ', immutableArray.pop(input));
    console.log('shift: ', immutableArray.shift(input));
    console.log('unshift: ', immutableArray.unshift(input, 67));
    console.log('remove: ', immutableArray.remove(input, 3));
    console.log('insert: ', immutableArray.insert(input, 44, 3));
    console.log('swapWithPrevious: ', immutableArray.swapWithPrevious(input, 5));
    console.log('swapWithNext: ', immutableArray.swapWithNext(input, 1));

    console.log('===============================');

// 2
var one = [1, 9, 2, 3, 4, 5, 5, 6, 7, 8, 9];
var two = [3, 5, 9, 10, 12];

    function intersection(arr1, arr2) {
        var s = arr1.filter(function(a) {
            return arr2.indexOf(a) !== -1;
        })
        var t = s.filter(function(item, i, ar){ 
			return ar.indexOf(item) === i; 
		});
        return t;      
    }

    console.log(intersection(one, two));

    console.log('===============================');

// 3
    var string = 'Hello WORLD';

    function vowelCount(str) {
        const pattern = /[aeiouy]/gi;
        let result = 0;

        while (pattern.exec(str) !== null) {
            result ++;
        }

        return result;
    }
    console.log(vowelCount(string));

    console.log('===============================');

// 4 
    var str = [1, 3, 2, 8, 13, 7, 4, 12, 22];

    function toEvenOddString(arr) {
        var arrA = [],
            arrB = [];
        
        for (var i = 0, l = arr.length; i < l; i++) {
            if (arr[i] % 2 === 0) {
                arrA.push(arr[i])
            } else { 
                arrB.push(arr[i])
            }
        }

        arrA.sort(function(a, b) {
            return a - b;  
        });

        arrB.sort(function(a, b) {
            return b - a;  
        });
        
        return [...arrA, ...arrB];
    }

    console.log(toEvenOddString(str));

    console.log('===============================');
//6
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

    let tasks = [...monday, ...tuesday];

    function makeOneSum(arr) {
        var inHours = arr.map(function(item) {
            return item.duration / 60;
        });
        
        var filtered = inHours.filter(function(item) {
            return item > 2;
        });

        var inDollars = filtered.map(function(item) {
            return item * 15;
        });

        var oneSum =  inDollars.reduce(function(p, n) {
            return p + n;
        });

        return '$' + oneSum;
    }

    console.log(makeOneSum(tasks));

})();