const ImmutableArray = {
  push(arr, el) {
    return [...arr, el];
  },

  pop(arr) {
    return arr.slice(0, -1);
  },

  shift(arr) {
    return arr.slice(1);
  },

  unshift(arr, el) {
    return [el, ...arr];
  },

  remove(arr, index) {
      let temp = [...arr]; //copy
      temp.splice(index, 1);
      return temp;
  },

  insert(arr, el, index) {
    let temp = [...arr]; //copy
    temp.splice(index, 0, el);
    return temp;
  },

  swapWithPrevious(arr, index) {
    let copy = [...arr]; //copy
    let temp = copy[index];
    copy[index] = copy[index - 1]
    copy[index - 1] = temp;
    return copy;
  },

  swapWithNext(arr, index) {
    return this.swapWithPrevious(arr, index + 1);
  }
}
