/*
PLAN:
1. Turn input into an object with frequency counters
2. Pull out values into an array
3. Loop over the array and count frequency of odd values */
let start = performance.now();
function countUnpaired(input) {
  let counter = 0;
  let frequencyTable = {};
  input.map((item) => {
    frequencyTable[item] ? frequencyTable[item]++ : (frequencyTable[item] = 1);
  });
  let frequencyList = Object.values(frequencyTable);
  for (frequency of frequencyList) {
    if (frequency % 2 === 1) {
      counter++;
    }
  }
  return counter;
}

console.log(
  countUnpaired([
    1, 2, 3, 4, 4, 1, 1, 1, 9, 1259, 1259, 0, 0, 0, 0, 0, 0, 0, 348, 9, 9, 8,
    11, 12, 57, 89, 0, 0, 0, 0, 348, 9, 9, 8, 11, 12, 57, 89, 1259, 0, 0, 0, 0,
    0, 0, 0, 348, 9, 9,
  ])
);
let finish = performance.now();
console.log(`version 8 took ${finish - start} miliseconds`);
