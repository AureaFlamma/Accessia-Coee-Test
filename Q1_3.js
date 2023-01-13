function countUnpaired(input) {
  let matches = [];
  function removePairs(arr, a, b) {
    let indexOne = arr.indexOf(a);
    let indexTwo = arr.indexOf(b);
    arr.splice(indexOne, 1);
    arr.splice(indexTwo, 1);
  }
  (function compareNumbers() {
    for (let i = 0; i < input.length; i++) {
      for (let k = 0; k < input.length; k++) {
        if (input[i] === input[k] && i !== k) {
          removePairs(input, input[i], input[k]);
        }
      }
    }
  })();

  return input;
}

console.log(countUnpaired([7, 1, 1, 2, 3, 5, 5, 5, 5, 5, 1, 2, 7]));

/*
1. Loop through the outer array
2. For every item, loop through the inner array
-if no match is found, continue to loop
-if match is found:
    -delete both items
    -carry on looping from the place you left of (not the place after it)


*/
