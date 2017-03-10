class MyMap {
    constructor() {
        this.items = new Map();
    }
    setItem(key, item) {
        this.items.set(key, item);
    }
    getItem(key) {
        return this.items.get(key);
    }
    clear() {
        this.items.clear();
    }
    printMap() {
        for (var key of this.items) {
            console.log(key);
        }
    }
}
const numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
const stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
