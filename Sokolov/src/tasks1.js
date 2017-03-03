var vsModule = (function() {
  'use strict';
  var obj = {
    repeat(str, num) {
      var r = "";
      for (let i = 0; i < num; i++) {
        r += str;
      }
      return r;
    },

    turnMeBaby(str) {
      return str.split('').reverse().join('');
    },

    ucFirst(s) {
      s = s.trim();
      if (s.length === 0)
        return '';
      return s[0].toUpperCase() + s.substr(1);
    },

    ucFirstUsingArray(s) {
      if (s.length === 0)
        return '';
      var a = s.trim().split('');
      a[0] = a[0].toUpperCase();
      return a.join('');
    },

    raiseToPower(num, power) {
      var result = 1;
      for (let i = 0; i < power; i++)
        result *= num;
      return result;
    },

    truncate(str, maxlength) {
      var result = str;
      if (str.length > maxlength) {
        result = str.substr(0, maxlength) + "...";
      }
      return result;
    },

    countWords(str) {
      var wordCounter = 0,
          inWord = false;
      for (let i = 0; i < str.length; i++) {
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
    },

    countWordsUsingRegexp(str) {
      var wordCounter = 0;
      var arr = str.match(/([^\s])+/g);
      if (arr) {
        wordCounter = arr.length;
      }
      return wordCounter;
    },

    multiTable(startsWith=1, numLines=81) {
      const maxFactor = 10;
      var lineCounter = 0,
          result = "";
      if (startsWith < 1
          || startsWith >= maxFactor
          || numLines < 1)
        return result;
      for (let i = startsWith; i < maxFactor; i++) {
        for (let j = 1; j < maxFactor; j++) {
          result += `${i} * ${j} = ${i * j};\n`;
          lineCounter++;
          if (lineCounter >= numLines) {
            return result;
          }
        }
        result += "\n==========\n\n";
      }
      return result;
    },

    printMultiTable(startsWith, numLines) {
      var content = this.multiTable(startsWith, numLines);
      if (typeof global === 'object') {
        console.log(content);
      } else {
        document.write('<div class="multi-table">');
        document.write(content.replace(/\n/g, "<br />\n"));
        document.write('</div>');
      }
    },

    doubleNum(num) {
      var s = "" + num;
      if (s.length % 2 === 0) {
        var mid = s.length / 2;
        if (s.substr(0, mid) == s.substr(mid)) {
          return num;
        }
      }
      return num * 2;
    }

  };
  return obj;
})();

// console.log(repeat("hello", 3));
// console.log(turnMeBaby("hello"));
// console.log(ucFirst("hello"));
// console.log(power(5, 3));
vsModule.printMultiTable(5, 10);
