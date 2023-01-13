function countUnpaired(input) {
  function removePairs(arr, a, b) {
    let indexOne = arr.indexOf(a);
    let indexTwo = arr.indexOf(b);
    arr.splice(indexOne, 1);
    arr.splice(indexTwo, 1);
  }
  let match = [];
  let results = [];
  input.map((item, index) => {
    match = input.filter((element) => element === item);
    results.push(match);
    match.map((item) => input.splice(input.indexOf(item), 1));
  });
  return results;
}

console.log(countUnpaired([1, 2, 3, 4, 4, 5, 6, 10, 12, 15, 100]));
