// STRING

//1  ==================================================
function multiplyStr (str, n) {
  let newString = '';
  while (n) {
    newString += str;
    n--;
  }
 return newString;
}

res = multiplyStr ("h",7);
console.log (res);



//2  ===================================================
function ucFirst (str) {
  let firstLetter = str.charAt(0).toUpperCase();
  return firstLetter + str.slice(1);
}

res = ucFirst ("qqqqq");
console.log (res);


//3  =====================================================
function truncate(str, maxlength) {
  if (str.length > maxlength & maxlength > 3) {
     let newStr = str.slice(0,maxlength-3) + "...";
     return newStr;
  }
  return str;
}

res = truncate ("123456789", 5);
console.log (res);


//4  =========================================================
function turnMeBaby(str) {
  return str.split("").reverse().join("");
}

res = turnMeBaby ("12345");
console.log (res);


//5  ==============================================================
function wordQuantity(str) {
  return str.replace (/^[\s]+/, '').replace (/[\s]+$/, '').split(/[\s]+/).length;
}

res = wordQuantity ("qqq   aaa    bbb");
console.log (res);

//=========================================================================================

//NUMBER

//1  ==================================================================
function pow(number, n) {
  let result = 1;
  if (n === 0){
    return result;
  } else {
    while (n > 0) {
      result *= number;
      n--;
    }
    return result;
  }
}

res = pow (2,5);
console.log (res);



//2  ======================================================================
function multiplication () {
  for (var i=1; i<10; i++) {
    for (var j=1; j<10; j++) {
      console.log (i + " * " + j + " = " + i*j);
    }
    console.log ("============");
  }
}

multiplication ();



//3  =====================================================================
function multiTable (i,k) {
    for (j=1; j<=k; j++) {
      console.log (i + " * " + j + " = " + i*j);
    }
}

multiTable (2,3);



//4  ======================================================================
function doubleNum (number) {
  let str = number.toString(),
      firstPart = str.slice(0, str.length / 2),
      secondPart = str.slice(str.length / 2);
  if (firstPart == secondPart) {
    return number;
  }
  return number * 2;
}

console.log (doubleNum(100100));
