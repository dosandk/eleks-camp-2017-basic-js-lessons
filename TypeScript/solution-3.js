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
        this.mapObj = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.mapObj[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.mapObj[key];
    };
    MyMap.prototype.clear = function () {
        this.mapObj = {};
    };
    MyMap.prototype.printMap = function () {
        console.log(this.mapObj);
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
