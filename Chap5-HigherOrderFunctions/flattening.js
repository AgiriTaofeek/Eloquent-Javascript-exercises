/*
Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
*/

const flatten = (arrays) => {
  return arrays.reduce((flatArray, currentArray) => {
    return flatArray.concat(currentArray);
  }, []); //The trick is to initialize with an empty array hence flatArray parameter would be an empty array [] initially and then the first element of the arrays parameter would be the currentArray parameter initially. During the second iteration, the flatArray parameter would be result of the first iteration where we concat [] and [1, 2, 3] => [1, 2, 3]. the currentArray parameter would be [4, 5] and then concat happens again until the end.
};

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]
