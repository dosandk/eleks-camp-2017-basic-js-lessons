var MyMap = (function () {
    function MyMap() {
        this.Map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.Map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.Map[key];
    };
    MyMap.prototype.clear = function () {
        this.Map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.Map) {
            console.log(key);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
console.log(numberMap.getItem("apples"));
numberMap.clear();
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
