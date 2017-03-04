let ImmutableArray = {
    push: (arr, el) => {
        let tempArr = [];
        arr.forEach((item=>{tempArr.push(item)}));
        tempArr.push(el);
        return tempArr;
    },
    pop: (arr) => {
        return arr.slice(0, arr.length-1);
    },
    shift: (arr) => {
        let tempArr = [];
        arr.forEach((item=>{tempArr.push(item)}));
        tempArr.shift();
        return tempArr;
    },
    unshift: (arr, el) => {
        let tempArr = [];
        arr.forEach((item=>{tempArr.push(item)}));
        tempArr.unshift(el);
        return tempArr;
    },
    remove: (arr, index) => {
        let tempArr = [];
        arr.forEach((item=>{tempArr.push(item)}));
        tempArr.splice(index, 1);
        return tempArr;
    },
    insert: (arr, el, index) => {
        let tempArr = [];
        arr.forEach((item=>{tempArr.push(item)}));
        tempArr.splice(index, 0, el);
        return tempArr;
    },
    swapWithPrevious: (arr, index) => {
        let tempArr = [];
        arr.forEach((item=>{tempArr.push(item)}));
        let element = tempArr[index];
        tempArr.splice(index, 1);
        tempArr.splice(index-1, 0, element);
        return tempArr;
    },
    swapWithNext: (arr, index) => {
        let tempArr = [];
        arr.forEach((item=>{tempArr.push(item)}));
        let element = tempArr[index];
        tempArr.splice(index, 1);
        tempArr.splice(index+1, 0, element);
        return tempArr;
    }
};