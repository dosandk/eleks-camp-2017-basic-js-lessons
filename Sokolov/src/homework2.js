var arrModule = (function() {
  var obj = {
    push(arr, ...el) {
      return arr.concat(el);
    },

    push2(arr, el) {
      var res = arr.slice();
      res[res.length] = el;
      return res;
    },

    push3(arr, el) {
      var res = arr.slice();
      res.push(el);
      return res;
    },

    pop(arr) {
      var res = arr.slice();
      if (res.length > 0)
        res.length--;
      return res;
    },

    shift(arr) {
      if (arr.length <= 0)
        return arr;
      var res = arr.slice(1);
      return res;
    },

    unshift(arr, ...el) {
      return [].concat(el, arr);
    },

    remove(arr, index) {
      if (index < 0 || index >= arr.length)
        return arr;
      var res = arr.slice();
      res.splice(index, 1);
      return res;
    },

    swapWithPrevious(arr, index) {
      if (index < 1 || index >= arr.length)
        return arr;
      var res = arr.slice();
      res[index-1] = arr[index];
      res[index] = arr[index-1];
      return res;
    },

    swapWithNext(arr, index) {
      return this.swapWithPrevious(arr, index + 1);
    },

    intersection(arr1, arr2) {
      var res = arr1.slice();
      return res
        .filter((v) => {
          return arr1.includes(v) && arr2.includes(v);
        })
        .sort();
    },

    vowelCount(str){
      var mc = str.match(/([aeiouy])/gi);
      return (mc) ? mc.length : 0;
    },

    toEvenOddString(arr) {
      var even, odd;
      even = arr.filter((v) => v % 2 === 0).sort((x, y) => x - y);
      odd = arr.filter((v) => v % 2 !== 0).sort((x, y) => y - x);
      return even.concat(odd).join('');
    },

    toEvenOddStringUsingNot(arr) {
      var not = (f) => {
        return function() {
          var result = f.apply(this, arguments);
          return !result;
        };
      };
      var even = (v) => v % 2 === 0;
      return  arr.filter(even).sort((x, y) => x - y)
        .concat(arr.filter(not(even)).sort((x, y) => y - x))
        .join('');
    },

    snail(arr) {
      var rotate = (a) => {
        if (typeof a === 'undefined'
            || a.length === 0
            || a[0].length === 0)
          return [];
        let res = [];
        let n = a.length,
            m = a[0].length;
        // one line
        if (n === 1) {
          res.push(a[0].reverse());
          return res;
        }
        // more lines
        for (let i = 0; i < m; i++) {
          res[i] = [];
          for (let j = 0; j < n; j++)
            res[i][j] = a[j][m - i - 1];
        }
        return res;
      };
      let result = [];
      while (arr.length > 0) {
        result = result.concat(arr.shift());
        arr = rotate(arr);
      }
      return result;
    }
  };
  return obj;
})();
