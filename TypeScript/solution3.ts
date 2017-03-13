class MyMap<T>{
    Map = {};
   setItem (key: string, item: T){
     this.Map[key] = item;
   }
   getItem(key: string){
       return this.Map[key]
   }
   clear(){
       this.Map = {};
   }
   printMap(){
       for(let key in this.Map){
           console.log(key);
       }
   }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
console.log(numberMap.getItem("apples"))
numberMap.clear();
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();