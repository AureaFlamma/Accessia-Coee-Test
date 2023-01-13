function countUnpaired(input) {
  let matches = [];
  function removePairs(arr, a, b) {
    let indexOne = arr.indexOf(a);
    arr.splice(indexOne, 1);
    let indexTwo = arr.indexOf(b);
    arr.splice(indexTwo, 1);
  }
  function compareNumbers(n) {
    for (let i = 0; i < input.length; i++) {
      if (input[n] === input[i] && n !== i) {
        console.log("pair removed :", input[n], input[i]);
        removePairs(input, input[n], input[i]);
        compareNumbers(n);
      } else {
        console.log("increasing n to ", n + 1);
        compareNumbers(n + 1);
      }
    }
    return;
  }
  compareNumbers(0);

  return input;
}

console.log(countUnpaired([5, 7, 1, 1, 2, 2, 3, 1, 5]));
