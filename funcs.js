function repeat(str, times) {
  var result = '';
  for (var i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

function ucFirst(str) {
  return str[0].toUpperCase() + str.substring(1);
}

function truncate(str, maxlength) {
  if (str.length > maxlength) {

  }

}

function turnMeBaby(str) {
  var reversed = "";
  for (var i = str.length-1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(ucFirst('hi'));
