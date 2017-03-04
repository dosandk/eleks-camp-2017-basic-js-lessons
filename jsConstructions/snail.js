var arr = [
  [ 1,  2,  3,  4, 5],
  [12, 13, 14, 15, 6],
  [11, 10,  9,  8, 7]
];

// gets i-th element from arr (i can be negative)
function nth(arr, i) {
  return i >= 0 ? arr[i] : arr[arr.length + i];
}

// arr should be two dimensinal array
function rotate(arr) {
  let res = [];
  for (let i = 0; i < arr[0].length; i++) {
    res.push(arr.map(x => nth(x, i)));
  }
  return res.reverse();
}

function snail(arr) {
  let copy = [...arr],
      snailed = [copy.shift()];

  while (copy.length !== 0) {
    copy = rotate(copy);
    snailed.push(copy.shift());
  }
  return snailed.reduce((a, b) => a.concat(b)); // flat array
}

console.log(snail(arr))
