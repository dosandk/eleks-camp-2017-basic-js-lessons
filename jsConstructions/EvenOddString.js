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
