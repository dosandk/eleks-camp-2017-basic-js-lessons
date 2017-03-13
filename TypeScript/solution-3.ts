
// Let's keep it simple and only add the following methods to the Map:
//
// setItem(key: string, item: T) // should create a new key-value pair
//
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below:

class MyMap <type> {
    mapObj: object;
    constructor () {
        this.mapObj = {};
    }
    setItem (key: string, item: type){
        this.mapObj[key]=item;
    }
    getItem(key: string): any {
        return this.mapObj[key];
    }
    clear(): void {
        this.mapObj = {};
    }
    printMap(): any {
        console.log(this.mapObj);
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