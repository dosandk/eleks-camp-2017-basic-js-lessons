function intersection(arr1, arr2) {
  return [...new Set(arr1.filter((el) => arr2.indexOf(el) !== -1))];
}
