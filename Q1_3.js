function countUnpaired(input) {
  function removePairs(arr, a, b) {
    let indexOne = arr.indexOf(a);
    arr.splice(indexOne, 1);
    let indexTwo = arr.indexOf(b);
    arr.splice(indexTwo, 1);
  }
  function compareNumbers(a, b) {
    return a - b;
  }
  let sortedArray = input.sort(compareNumbers);
  return sortedArray;
}

console.log(countUnpaired([5, 1, 2, 3, 6, 6, 7, 8, 2, 9, 9, 1, 1, 2, 2, 2]));
