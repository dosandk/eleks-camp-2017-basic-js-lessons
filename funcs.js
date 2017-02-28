function fail(thing) {
  throw new Error(thing);
}

function repeat(str, count) {
  if (typeof str !== 'string') {
    fail("type of str should be 'string'");
  }
  if (!Number.isInteger(count)) {
    fail('count should be integer');
  }
  if (count < 0) {
    fail('count should be positive');
  }

  var result = '';
  for (var i = 0; i < count; i++) {
    result += str;
  }
  return result;
}

function ucFirst(str) {
  if (typeof str !== 'string') {
    fail("type of str should be 'string'");
  }
  return str.length > 0 ? str[0].toUpperCase() + str.substring(1) : '';
}

function truncate(str, maxlength, replace="...") {
  if (typeof str !== 'string') {
    fail("type of str should be 'string'");
  }
  if (!Number.isInteger(maxlength)) {
    fail("maxlength should be 'integer'");
  }
  if (maxlength < 0) {
    fail('maxlength should be positive');
  }
  if (str.length > maxlength) {
    return str.substring(0, maxlength - replace.length) + replace;
  }
  return str;
}
