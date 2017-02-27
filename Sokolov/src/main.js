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
  if (s.length === 0)
    return '';
  s = s.trim();
  return s[0].toUpperCase() + s.substring(1, s.length);
}

function ucFirstUsingArray(s) {
  if (s.length === 0)
    return '';
  var a = s.trim().split('');
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

function multiTable(startsWith, numLines) {
  if (typeof startsWith === 'undefined')
    startsWith = 1;
  if (typeof numLines === 'undefined')
    numLines = 81;
  var i, j,
      lineCounter = 0,
      result = "";
  if (startsWith < 1
      || startsWith >= 10
      || numLines < 1)
    return result;
  for (i = startsWith; i < 10; i++) {
    for (j = 1; j < 10; j++) {
      result += i + " * " + j + " = " + i * j + ";\n";
      lineCounter++;
      if (lineCounter >= numLines) {
        return result;
      }
    }
    result += "\n==========\n\n";
  }
  return result;
}

function printMultiTable(startsWith, numLines) {
  var content = multiTable(startsWith, numLines);
  if (typeof global === 'object') {
    console.log(content);
  } else {
    document.write('<div class="multi-table">');
    document.write(content.replace(/\n/g, "<br />\n"));
    document.write('</div>');
  }
}

function doubleNum(num) {
  var s = "" + num;
  if (s.length % 2 === 0) {
    var mid = s.length / 2;
    if (s.substr(0, mid) == s.substr(mid, mid)) {
      return num;
    }
  }
  return num * 2;
}

// console.log(repeat("hello", 3));
// console.log(turnMeBaby("hello"));
// console.log(ucFirst("hello"));
// console.log(power(5, 3));
printMultiTable(5, 10);
