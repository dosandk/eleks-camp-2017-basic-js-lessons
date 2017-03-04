const ImmutableArray = {
  push(arr, el) {
    return [...arr, el];
  },

  pop(arr) {
    return arr.slice(0, -1);
  },

  shift(arr) {
    return arr.slice(1);
  },

  unshift(arr, el) {
    return [el, ...arr];
  },

  remove(arr, index) {
      let temp = [...arr]; //copy
      temp.splice(index, 1);
      return temp;
  },

  insert(arr, el, index) {
    let temp = [...arr]; //copy
    temp.splice(index, 0, el);
    return temp;
  },

  swapWithPrevious(arr, index) {
    let copy = [...arr]; //copy
    let temp = copy[index];
    copy[index] = copy[index - 1]
    copy[index - 1] = temp;
    return copy;
  },

  swapWithNext(arr, index) {
    return this.swapWithPrevious(arr, index + 1);
  }
}

function intersection(arr1, arr2) {
  return [...new Set(arr1.filter((el) => arr2.indexOf(el) !== -1))];
}

function vowelCount(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

function isEven(x) {
  return x % 2 === 1 ? false: true;
}

function isOdd(x) {
  return !isEven(x);
}

function toEvenOddString(arr) {
  return [...arr].sort(function(a, b) {
    if (isEven(a) && isOdd(b)) {
      return -1;
    }
    if (isOdd(a) && isEven(b)) {
      return 1;
    }
    if (isEven(a) && isEven(b)) {
      return a - b;
    }
    if (isOdd(a) && isOdd(b)) {
      return b - a;
    }
  }).join('');
}
