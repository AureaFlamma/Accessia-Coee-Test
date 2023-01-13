/* 
PLAN A:
1. Loop through outer array
2. For every item, loop through inner array
3. If match found:
    a) delete the 2 items
    b) repeat the last loop (i.e. continue to loop from that place) 
*/
function countUnpaired(input) {
  function removePairs(arr, a, b) {
    let indexOne = arr.indexOf(a);
    let indexTwo = arr.indexOf(b);
    arr.splice(indexOne, 1);
    arr.splice(indexTwo, 1);
  }
  function compareNumbers(n) {
    for (let i = n; i < input.length; i++) {
      for (let k = i + 1; k < input.length; k++) {
        if (input[i] === input[k]) {
          console.log(`Deleted ${input[i]} and ${input[k]}`);
          removePairs(input, input[i], input[k]);
          console.log(` Array is now ${input}`);

          compareNumbers(i);
        } else {
          console.log(
            `compared ${input[i]} with ${input[k]}. Array is still ${input}`
          );
        }
      }
    }
  }
  compareNumbers(0);

  return input;
}

console.log(countUnpaired([1, 1, 2, 3, 5, 5, 5, 6, 7, 8, 8]));

/*
 PLAN B:
1. Loop thru outer array
2. For every item, filter inner array and return the result
3. Push the results to a results array
4. Count the items in the results array which have an odd number of elements.
*/
