let start = performance.now();
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

console.log(
  countUnpaired([
    1, 2, 3, 4, 4, 1, 1, 1, 9, 1259, 1259, 0, 0, 0, 0, 0, 0, 0, 348, 9, 9, 8,
    11, 12, 57, 89, 0, 0, 0, 0, 348, 9, 9, 8, 11, 12, 57, 89, 1259, 0, 0, 0, 0,
    0, 0, 0, 348, 9, 9,
  ])
);
let finish = performance.now();
console.log(`version 5 took ${finish - start} miliseconds`);

// console.log([input[i], input[k]]);
/*
PLAN A:
1. Loop through input
2. For every item create an array that's input minus that item;
3. Loop through that second array
4. For every item of the second array compare it to the input item;
5. If a match; add to some sort of array. 

PLAN B: 
1. Loop through input
2. For every item loop through input again
3. If the items match but the indices do not, remove both from input (HOW?):
4. Run the loop again. 


HOW TO DELETE IT:
1. 
*/

// if (input[i] === input[k] && i !== k) {
//     console.log("equal value, different indices: ", [input[i], input[k]]);
//   } else if (input[i] === input[k] && i === k) {
//     console.log("equal value, same indices:", [input[i], input[k]]);
//   } else if (input[i] !== input[k] && i !== k) {
//     console.log("different value: ", [input[i], input[k]]);
//   }
