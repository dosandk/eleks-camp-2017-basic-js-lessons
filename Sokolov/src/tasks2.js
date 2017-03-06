var arrModule = (function() {
  var util = utilModule;
  return {
    push(arr, ...el) {
      util.checkParamTypes(arguments, ['array']);
      return arr.concat(el);
    },

    push2(arr, el) {
      util.checkParamTypes(arguments, ['array']);
      var res = arr.slice();
      res[res.length] = el;
      return res;
    },

    push3(arr, el) {
      util.checkParamTypes(arguments, ['array']);
      var res = arr.slice();
      res.push(el);
      return res;
    },

    pop(arr) {
      util.checkParamTypes(arguments, ['array']);
      var res = arr.slice();
      if (res.length > 0)
        res.length--;
      return res;
    },

    pop2(arr) {
      util.checkParamTypes(arguments, ['array']);
      return arr.slice(0, -1);
    },

    shift(arr) {
      util.checkParamTypes(arguments, ['array']);
      return (arr.length <= 0) ? arr : arr.slice(1);
    },

    unshift(arr, ...el) {
      util.checkParamTypes(arguments, ['array']);
      return [].concat(el, arr);
    },

    remove(arr, index) {
      util.checkParamTypes(arguments, ['array', 'number']);
      if (index < 0 || index >= arr.length)
        return arr;
      var res = arr.slice();
      res.splice(index, 1);
      return res;
    },

    swapWithPrevious(arr, index) {
      util.checkParamTypes(arguments, ['array', 'number']);
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
      util.checkParamTypes(arguments, ['array', 'array']);
      return arr1.slice()
        .filter((v) => {
          return arr1.includes(v) && arr2.includes(v);
        })
        .sort();
    },

    vowelCount(str){
      util.checkParamTypes(arguments, ['string']);
      var mc = str.match(/([aeiouy])/gi);
      return (mc) ? mc.length : 0;
    },

    toEvenOddString(arr) {
      util.checkParamTypes(arguments, ['array']);
      var even, odd;
      even = arr.filter((v) => v % 2 === 0).sort((x, y) => x - y);
      odd = arr.filter((v) => v % 2 !== 0).sort((x, y) => y - x);
      return even.concat(odd).join('');
    },

    toEvenOddStringUsingHigherOrderFunctions(arr) {
      util.checkParamTypes(arguments, ['array']);
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

    rotateMatrix(arr) {
      if (arr === undefined
          || arr.length === 0
          || arr[0].length === 0)
        return [];
      let res = [],
          n = arr.length,
          m = arr[0].length;
      for (let i = 0; i < m; i++) {
        res[i] = [];
        for (let j = 0; j < n; j++)
          res[i][j] = arr[j][m - i - 1];
      }
      return res;
    },

    snail(arr) {
      util.checkParamTypes(arguments, ['array']);
      let result = [];
      while (arr.length > 0) {
        result = result.concat(arr.shift());
        arr = this.rotateMatrix(arr);
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
      util.checkParamTypes(arguments, ['array', 'number', 'number']);
      return "$" + tasks
        .reduce((x, y) => x.concat(y))
        .map((x) => { x.duration /= 60; return x; })
        .filter((x) => x.duration > gtHours)
        .map((x) => { x.duration *= rate; return x; })
        .reduce((x, y) => x + y.duration, 0);
    }
  };
})();
