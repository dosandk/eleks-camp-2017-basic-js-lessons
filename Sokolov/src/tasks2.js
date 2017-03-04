var arrModule = (function() {
  return {
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
      return (arr.length <= 0) ? arr : arr.slice(1);
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
      return arr1.slice()
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

    toEvenOddStringUsingHigherOrderFunctions(arr) {
      var not = (f) => {
        return function() {
          return !(f.apply(this, arguments));
        };
      };
      var neg = (f) => {
        return function() {
          return -(f.apply(this, arguments));
        };
      };
      var even = (v) => v % 2 === 0;
      var ascending = (x, y) => x - y;
      return  arr.filter(even).sort(ascending)
        .concat(arr.filter(not(even)).sort(neg(ascending)))
        .join('');
    },

    rotate2dArray(arr) {
      if (typeof arr === 'undefined'
          || arr.length === 0
          || arr[0].length === 0)
        return [];
      let res = [],
          n = arr.length,
          m = arr[0].length;
      // one line
      if (n === 1) {
        res.push(arr[0].reverse());
        return res;
      }
      // more lines
      for (let i = 0; i < m; i++) {
        res[i] = [];
        for (let j = 0; j < n; j++)
          res[i][j] = arr[j][m - i - 1];
      }
      return res;
    },

    snail(arr) {
      let result = [];
      while (arr.length > 0) {
        result = result.concat(arr.shift());
        arr = this.rotate2dArray(arr);
      }
      return result;
    },

    getTasksOnly(tasks) {
      return tasks.reduce((x, y) => x.concat(y));
    },

    convertToHours(tasks) {
      return tasks.map((x) => { x.duration /= 60; return x; });
    },

    filterGreaterThan(tasks, threshold) {
      return tasks.filter((x) => x.duration > threshold);
    },

    convertHoursToMoney(tasks, rate) {
      return tasks.map((x) => { x.duration *= rate; return x; });
    },

    sumHours(tasks) {
      return tasks.reduce((x, y) => x + y.duration, 0);
    },

    stringifyAmount(amount) {
      return "$" + amount;
    },

    amount(tasks, gtHours, rate) {
      return "$" + tasks
        .reduce((x, y) => x.concat(y))
        .map((x) => { x.duration /= 60; return x; })
        .filter((x) => x.duration > gtHours)
        .map((x) => { x.duration *= rate; return x; })
        .reduce((x, y) => x + y.duration, 0);
    }
  };
})();
