var MyMap = (function () {
    function MyMap() {
    }
    MyMap.prototype.setItem = function (key, value) {
        Object.defineProperty(this, key, {
            value: value,
            enumerable: true,
            configurable: true
        });
    };
    MyMap.prototype.getItem = function (key) {
        console.log(this[key]);
    };
    MyMap.prototype.printMap = function () {
        var propsArray = Object.keys(this);
        for (var i = 0; i < propsArray.length; i++) {
            console.log("key: " + propsArray[i] + "; value: " + this[propsArray[i]]);
        }
    };
    MyMap.prototype.clear = function () {
        for (var prop in this) {
            if (this.hasOwnProperty(prop)) {
                delete this[prop];
            }
        }
        console.info('Properties deleted');
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
