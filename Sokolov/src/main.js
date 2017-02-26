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
  var a = s.trim().split('');
  if (a.length === 0)
    return '';
  a[0] = a[0].toUpperCase();
  return a.join('');
}

function raiseToPower(num, power) {
  var i, result = 1;
  for (i = 0; i < power; i++)
    result *= num;
  return result;
}

function truncate(str, maxlength) {
  var result = str;
  if (str.length > maxlength) {
    result = str.substr(0, maxlength) + "...";
  }
  return result;
}

function countWords(str) {
  var wordCounter = 0,
      inWord = false,
      i;
  for (i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'z') {
      if (!inWord) {
        inWord = true;
        wordCounter++;
      }
    } else {
      inWord = false;
    }
  }
  return wordCounter;
}

function countWordsUsingRegexp(str) {
  var wordCounter = 0;
  var arr = str.match(/([^\s])+/g);
  if (arr) {
    wordCounter = arr.length;
  }
  return wordCounter;
}

// console.log(repeat("hello", 3));
// console.log(turnMeBaby("hello"));
// console.log(ucFirst("hello"));
// console.log(power(5, 3));
