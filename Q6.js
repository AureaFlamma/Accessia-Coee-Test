/*
 PLAN B:
1. Loop thru outer array
2. For every item, filter inner array and return the result
3. Push the results to a results array
4. Count the items in the results array which have an odd number of elements.
*/

function countUnpaired(input) {
  let results = [];
  let match;
  for (let i = 0; i < input.length; i++) {
    match = input.filter((element) => element === input[i]);
    console.log("Ha! a match: ", match);
  }
  console.log(results);
  return;
}

console.log(countUnpaired([1, 2, 3, 4, 4, 5, 6, 10, 12, 15, 100]));
