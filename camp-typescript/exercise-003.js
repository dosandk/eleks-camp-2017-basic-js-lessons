// Let's keep it simple and only add the following methods to the Map:
//
// setItem(key: string, item: T) // should create a new key-value pair
//
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below:
var MyMap = (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        Object.defineProperty(this.map, key, {
            enumerable: true,
            writable: true,
            configurable: true,
            value: item
        });
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        return this.map;
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.printMap());
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
console.log(stringMap.printMap());
stringMap.clear();
stringMap.setItem('age', "27");
console.log(stringMap.getItem('age'));
console.log(stringMap.printMap());
