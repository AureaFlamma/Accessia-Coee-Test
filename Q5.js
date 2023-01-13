function countUnpaired(input) {
  function removePairs(arr, a, b) {
    let indexOne = arr.indexOf(a);
    let indexTwo = arr.indexOf(b);
    arr.splice(indexOne, 1);
    arr.splice(indexTwo, 1);
  }
  (function compareNumbers() {
    let i = 0;
    while (i < input.length) {
      for (let k = 0; k < input.length; k++) {
        if (input[i] === input[k] && i !== k) {
          console.log(`Deleted ${input[i]} and ${input[k]}`);
          removePairs(input, input[i], input[k]);
          console.log(` Array is now ${input}`);
        } else {
          console.log(
            `compared ${input[i]} with ${input[k]}. Array is still ${input}`
          );
          ++i;
        }
      }
    }
  })();

  return input;
}

console.log(countUnpaired([1, 2, 3, 4, 4, 5, 6, 10, 12, 15, 100]));
