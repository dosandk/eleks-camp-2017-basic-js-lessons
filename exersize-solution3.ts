// Let's keep it simple and only add the following methods to the Map:
//
// setItem(key: string, item: T) // should create a new key-value pair
//
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below:


class MyMap<T> {
    private _items: Map<string, T>;

    constructor(_items) {
        this._items = new Map<string, T>();
    }

    setItem(key, T) {
       return this._items.set(key, T);
    }

    getItem(key: string) {
        return this._items.get(key);
    }

    clear() {
        this._items.clear();
        return this._items;
    }

    printMap() {
       for(let entry of this._items) { 
           console.log(entry); 
       }
       
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();