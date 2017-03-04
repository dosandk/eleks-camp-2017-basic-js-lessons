let ImmutableArray = {
    copy:  function (arr) {
        return arr.slice();
    },
    push:  function (arr, el) {
        let tempArr = this.copy(arr);
        tempArr.push(el);
        return tempArr;
    },
    pop:  function (arr) {
        return arr.slice(0, arr.length-1);
    },
    shift:  function (arr) {
        let tempArr =this.copy(arr);
        tempArr.shift();
        return tempArr;
    },
    unshift:  function (arr, el) {
        let tempArr =this.copy(arr);
        tempArr.unshift(el);
        return tempArr;
    },
    remove:  function (arr, index) {
        let tempArr =this.copy(arr);
        tempArr.splice(index, 1);
        return tempArr;
    },
    insert:  function (arr, el, index) {
        let tempArr =this.copy(arr);
        tempArr.splice(index, 0, el);
        return tempArr;
    },
    swapWithPrevious:  function (arr, index) {
        let tempArr =this.copy(arr);
        let element = tempArr[index];
        tempArr.splice(index, 1);
        tempArr.splice(index-1, 0, element);
        return tempArr;
    },
    swapWithNext:  function (arr, index) {
        let tempArr =this.copy(arr);
        let element = tempArr[index];
        tempArr.splice(index, 1);
        tempArr.splice(index+1, 0, element);
        return tempArr;
    }
};