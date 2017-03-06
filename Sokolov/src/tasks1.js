var vsModule = (function() {
  'use strict';
  var util = utilModule;
  return {
    repeat(str, num) {
      util.checkParamTypes(arguments, ['string', 'number']);
      var r = "";
      for (let i = 0; i < num; i++) {
        r += str;
      }
      return r;
    },

    turnMeBaby(str) {
      util.checkParamTypes(arguments, ['string']);
      return str.split('').reverse().join('');
    },

    ucFirst(s) {
      util.checkParamTypes(arguments, ['string']);
      s = s.trim();
      if (s.length === 0)
        return '';
      return s[0].toUpperCase() + s.substr(1);
    },

    ucFirstUsingArray(s) {
      util.checkParamTypes(arguments, ['string']);
      if (s.length === 0)
        return '';
      var a = s.trim().split('');
      a[0] = a[0].toUpperCase();
      return a.join('');
    },

    raiseToPower(num, power) {
      util.checkParamTypes(arguments, ['number', 'number']);
      var result = 1;
      for (let i = 0; i < power; i++)
        result *= num;
      return result;
    },

    truncate(str, maxlength) {
      util.checkParamTypes(arguments, ['string', 'number']);
      var result = str;
      if (str.length > maxlength) {
        result = str.substr(0, maxlength) + "...";
      }
      return result;
    },

    countWords(str) {
      util.checkParamTypes(arguments, ['string']);
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
      util.checkParamTypes(arguments, ['string']);
      var wordCounter = 0;
      var arr = str.match(/([^\s])+/g);
      if (arr) {
        wordCounter = arr.length;
      }
      return wordCounter;
    },

    multiTable(start=1, numLines=81) {
      util.checkParamTypes([start, numLines], ['number', 'number']);
      const maxFactor = 10;
      var lineCounter = 0,
          result = "";
      if (start < 1
          || start >= maxFactor
          || numLines < 1)
        return result;
      for (let i = start; i < maxFactor; i++) {
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

    printMultiTable(start=1, numLines=81) {
      util.checkParamTypes([start, numLines], ['number', 'number']);
      var content = this.multiTable(start, numLines);
      if (typeof global === 'object') {
        console.log(content);
      } else {
        document.write('<div class="multi-table">');
        document.write(content.replace(/\n/g, "<br />\n"));
        document.write('</div>');
      }
    },

    doubleNum(num) {
      util.checkParamTypes(arguments, ['number']);
      var s = "" + num;
      if (s.length % 2 === 0) {
        var mid = s.length / 2;
        if (s.substr(0, mid) == s.substr(mid)) {
          return num;
        }
      }
      return num * 2;
    },

    dragonCurve(n) {
      util.checkParamTypes(arguments, ['number']);
      let result = [];
      for (let i = 0; i < n; i++) {
        result = result.concat(1,
          result.map((v) => (!v) ? 1 : 0).reverse()
        );
      }
      return result.join('');
    }

  };
})();
