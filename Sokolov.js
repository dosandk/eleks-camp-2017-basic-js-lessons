function repeat(str, num) {
  var i, r = "";
  for (i = 0; i < num; i++) {
    r += str;
  }
  return r;
}

function turnMeBaby(s) {
  var a = s.split('').reverse();
  return a.join('');
}

function ucFirst(s) {
  var a = s.split('');
  a[0] = a[0].toUpperCase();
  return a.join('');
}

function power(n, e) {
  var p = 1;
  for (let i = 0; i < e; i++)
    p *= n;
  return p;
}
console.log(repeat("hello", 3));
console.log(turnMeBaby("hello"));
console.log(ucFirst("hello"));
console.log(power(5, 3));
