

<!-- toc -->

- [Init & run](#init--run)
- [Tasks 1](#tasks-1)
  * [Strings](#strings)
  * [Numbers](#numbers)
- [Tasks 2](#tasks-2)
- [TypeScript](#typescript)
  * [Exercise-001](#exercise-001)
  * [Exercise-002](#exercise-002)

<!-- tocstop -->

### Init & run

``` shell
// install dependencies
npm install -d
// run tests
npm test
```

### Tasks 1
#### Strings

``` javascript
function repeat(str, num) {
  var r = "";
  for (let i = 0; i < num; i++) {
    r += str;
  }
  return r;
}

function ucFirst(s) {
  s = s.trim();
  if (s.length === 0)
    return '';
  return s[0].toUpperCase() + s.substr(1);
}

function truncate(str, maxlength) {
  var result = str;
  if (str.length > maxlength) {
    result = str.substr(0, maxlength) + "...";
  }
  return result;
}

function turnMeBaby(str) {
  return str.split('').reverse().join('');
}

function countWords(str) {
  var wordCounter = 0;
  var arr = str.match(/([^\s])+/g);
  if (arr) {
    wordCounter = arr.length;
  }
  return wordCounter;
}
```

#### Numbers

``` javascript
function raiseToPower(num, power) {
  var result = 1;
  for (let i = 0; i < power; i++)
    result *= num;
  return result;
}

function multiTable(start=1, numLines=81) {
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
}

function printMultiTable(start=1, numLines=81) {
  var content = multiTable(start, numLines);
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
    if (s.substr(0, mid) == s.substr(mid)) {
      return num;
    }
  }
  return num * 2;
}

function dragonCurve(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result = result.concat(
      1,
      result.map((v) => (!v) ? 1 : 0).reverse()
    );
  }
  return result.join('');
}
```

### Tasks 2

``` javascript
function push(arr, ...el) {
  return arr.concat(el);
}

function pop(arr) {
  var res = arr.slice();
  if (res.length > 0)
    res.length--;
  return res;
}

function shift(arr) {
  return (arr.length <= 0) ? arr : arr.slice(1);
}

function unshift(arr, ...el) {
  return [].concat(el, arr);
}

function remove(arr, index) {
  if (index < 0 || index >= arr.length)
    return arr;
  var res = arr.slice();
  res.splice(index, 1);
  return res;
}

function swapWithPrevious(arr, index) {
  if (index < 1 || index >= arr.length)
    return arr;
  var res = arr.slice();
  res[index-1] = arr[index];
  res[index] = arr[index-1];
  return res;
}

function swapWithNext(arr, index) {
  return swapWithPrevious(arr, index + 1);
}

function intersection(arr1, arr2) {
  return arr1.slice()
    .filter((v) => {
      return arr1.includes(v) && arr2.includes(v);
    })
    .sort();
}

function vowelCount(str){
  var mc = str.match(/([aeiouy])/gi);
  return (mc) ? mc.length : 0;
}

function toEvenOddString(arr) {
  var even, odd;
  even = arr.filter((v) => v % 2 === 0).sort((x, y) => x - y);
  odd = arr.filter((v) => v % 2 !== 0).sort((x, y) => y - x);
  return even.concat(odd).join('');
}

function rotateMatrix(arr) {
  if (arr === undefined
      || arr.length === 0
      || arr[0].length === 0)
    return [];
  let res = [],
      n = arr.length,
      m = arr[0].length;
  for (let i = 0; i < m; i++) {
    res[i] = [];
    for (let j = 0; j < n; j++)
      res[i][j] = arr[j][m - i - 1];
  }
  return res;
}

function snail(arr) {
  let result = [];
  while (arr.length > 0) {
    result = result.concat(arr.shift());
    arr = rotateMatrix(arr);
  }
  return result;
}

function amount(tasks, gtHours, rate) {
  return "$" + tasks
    .reduce((x, y) => x.concat(y))
    .map((x) => { x.duration /= 60; return x; })
    .filter((x) => x.duration > gtHours)
    .map((x) => { x.duration *= rate; return x; })
    .reduce((x, y) => x + y.duration, 0);
}
```

### TypeScript
#### Exercise-001
``` typescript
// Exercise 1 - Maybe use an Arrow Function?
var double = (value:number): number => value * 2;
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
var greet = (name: string = "Max"):void => {
    console.log(`Hello, ${name}`);
};
greet();
greet("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
var minNumber = Math.min(...numbers);
console.log(minNumber);

// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push(...numbers)
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
var {firstName, experience} = scientist;
console.log(firstName, experience);
```

#### Exercise-002

``` typescript
// Exercise 1 - How was your TypeScript Class?
class Car {
    acceleration: number = 0;

    constructor(public name: string) {}

    honk(): void {
        console.log("Toooooooooot!");
    }

    accelerate(speed: number): void {
        this.acceleration += speed;
    }
}
var car = new Car("Lada");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...

class BaseObject {
    width: number = 0;
    length: number = 0;
}

class Rectangle extends BaseObject {
    constructor() {
        super();
    }

    calcSize(): number {
        return this.width * this.length;
    }
}

var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log("Rectangle:", rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)

class Person {
    private _firstName: string = "";

    @enumerable(true)
    @configurable(true)
    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }
}

function enumerable(bool: boolean) {
    return function(target: any, propName: string,
                    descriptor: PropertyDescriptor) {
        descriptor.enumerable = bool;
    };
}

function configurable(bool: boolean) {
    return function(target: any, propName: string,
                    descriptor: PropertyDescriptor) {
        descriptor.configurable = bool;
    }
}

var person = new Person();
console.log(person.firstName);
person.firstName = "Se";
console.log(person.firstName);
person.firstName = "Set your firstName";
console.log(person.firstName);

```
