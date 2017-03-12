console.log("Exercise 3");

class MyMap<T> {
    [name: string]: any;

   setItem(key: string, value: T) {
       this[`${key}`] = value;
   }

   getItem(key: string){
       return  this[`${key}`];
   }

   clear(){
       for (let key in this) {
           if (this.hasOwnProperty(key)) {
               //let element = this[key];
               delete this[key];  
           }
       }
   }

   printMap(){
       for (let key in this) {
           if (this.hasOwnProperty(key)) {
               console.log(`${key} : ${this[key]}`);
           }
       }
   }
}

let map = new MyMap<number>();
map.setItem("banana", 1);
map.setItem("pineapples", 12);
map.printMap();
console.log(map.getItem("banana"));

let map2 = new MyMap<string>();
map2.setItem("apples", "red");
map2.setItem("grapes", "green");
map2.setItem("kiwi", "green");
map2.printMap();
map2.clear();
map2.printMap();

