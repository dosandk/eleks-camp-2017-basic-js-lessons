// Let's keep it simple and only add the following methods to the Map:
//
// setItem(key: string, item: T) // should create a new key-value pair
//
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below:
var MyMap = (function () {
    function MyMap(_items) {
        this._items = new Map();
    }
    MyMap.prototype.setItem = function (key, T) {
        return this._items.set(key, T);
    };
    MyMap.prototype.getItem = function (key) {
        return this._items.get(key);
    };
    MyMap.prototype.clear = function () {
        this._items.clear();
        return this._items;
    };
    MyMap.prototype.printMap = function () {
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var entry = _a[_i];
            console.log(entry);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
