class MyMap<type> {
    setItem(key: string, value: type) {
        Object.defineProperty(this, key, {
            value: value,
            enumerable: true,
            configurable: true
        })
    }
    getItem(key: string) {
        console.log(this[key]);
    }
    printMap() {
        let propsArray: string[] = Object.keys(this);
        for (let i = 0; i < propsArray.length; i++) {
            console.log(`key: ${propsArray[i]}; value: ${this[propsArray[i]]}`);
        }
    }
    clear() {
        for (let prop in this) {
            if (this.hasOwnProperty(prop)) {
                delete this[prop];
            }
        }
        console.info('Properties deleted')
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
