class MyMap<type> {
   map: object;
    constructor () {
        this.map = {};
    }
    setItem(key: string, item: type) {
        this.map[key]=item;
    }
    getItem(key: string): any {
        return this.map[key];
    }
    clear(): void {
        this.map = {};
    }
    printMap(): any {
        console.log(this.map);
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem('apples'));
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.clear();
stringMap.printMap();