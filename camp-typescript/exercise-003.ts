// Let's keep it simple and only add the following methods to the Map:
//
// setItem(key: string, item: T) // should create a new key-value pair
//
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below:
class MyMap<type> {
    public map: object;

    constructor () {
        this.map = {};
    }

    public setItem(key: string, item: type) {
        Object.defineProperty(this.map, key, {
            enumerable: true,
            writable: true,
            configurable: true,
            value: item
        });

    }

    public getItem(key: string): any {
        return this.map[key];
    }

    public clear(): void {
        this.map = {};
    }

    public printMap(): object {
        return this.map;
    }

}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.printMap());


const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
console.log(stringMap.printMap());
stringMap.clear();
stringMap.setItem('age', "27");
console.log(stringMap.getItem('age'));
console.log(stringMap.printMap());