console.log("Exercise 3");
var MyMap = (function () {
    function MyMap() {
    }
    MyMap.prototype.setItem = function (key, value) {
        this["" + key] = value;
    };
    MyMap.prototype.getItem = function (key) {
        return this["" + key];
    };
    MyMap.prototype.clear = function () {
    };
    MyMap.prototype.printMap = function () {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                console.log(key + " : " + this[key]);
            }
        }
    };
    return MyMap;
}());
var map = new MyMap();
map.setItem("banana", 1);
map.setItem("pineapples", 12);
map.printMap();
console.log(map.getItem("banana"));
var map2 = new MyMap();
map2.setItem("apples", "red");
map2.setItem("grapes", "green");
console.log(map2);
